/* eslint-disable no-nested-ternary */
// React Imports
import React, { useState, useEffect } from 'react';
import {
  View, ActivityIndicator, ScrollView
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

// App Imports
import { styles } from './styles';
import { log } from '../../utils/logger';
import TasksService from '../../services/TasksService';
import {
  ProjectAndTeamSelection,
  TeamMembersSelection,
  TeamMemberDetails,
  TasksList
} from '../../components';

const taskService = new TasksService();

const TaskScreen = () => {
  log.info('Task screen rendered...');

  // State Declarations
  const [projectsAndTeams, setProjectsAndTeams] = useState('');
  const [teams, setTeams] = useState([]);
  const [projects, setProjects] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedMember, setSelectedMember] = useState('');
  const [tasksList, setTasksList] = useState([]);

  /**
   * Function to fetch the list of projects available
   * for the logged in user and the associated teams
   */
  useFocusEffect(
    React.useCallback(() => {
      const fetchProjectsAndTeams = async () => {
        try {
          const projectAndTeamResp = await taskService.fetchProjectsAndTeams();
          setProjectsAndTeams(projectAndTeamResp);
        } catch (err) {
          log.error('Error fetching project and team details..', err);
        }
      };
      if (!projectsAndTeams) {
        fetchProjectsAndTeams();
      }
    }, [projectsAndTeams])
  );

  /**
   * Set the available projects and default the first project as selected project
   */
  useEffect(() => {
    const fetchProjectsAndTeams = async () => {
      if (projectsAndTeams && projectsAndTeams.length > 0) {
        const projectsArr = projectsAndTeams.map(
          (proj) => ({ label: proj.project, value: proj.id })
        );
        setProjects(projectsArr);
        setSelectedProject(projectsArr[0].value);
      }
    };
    fetchProjectsAndTeams();
  }, [projectsAndTeams]);

  /**
   * Set the available teams based on the selected project
   * and default the first team as selected team
   */
  useEffect(() => {
    const setTeamsBasedOnProj = async () => {
      if (projectsAndTeams && projectsAndTeams.length && selectedProject) {
        const selectedProj = projectsAndTeams.find((proj) => proj.id === selectedProject);
        const teamsArr = selectedProj.teams.map((team) => ({ label: team.name, value: team.id }));
        setTeams(teamsArr);
        const selectTeam = teamsArr[0].value;
        setSelectedTeam(selectTeam);
      }
    };
    setTeamsBasedOnProj();
  }, [selectedProject]);

  /**
   * Set the members based on team selection
   */
  useEffect(() => {
    const setMembersBasedOnTeam = async () => {
      if (projectsAndTeams && selectedTeam && selectedProject) {
        const selectedProj = projectsAndTeams.find((proj) => proj.id === selectedProject);
        const selectedProjTeam = selectedProj.teams.find((team) => team.id === selectedTeam);
        setTeamMembers(selectedProjTeam.members);
        setSelectedMember('');
      }
    };
    setMembersBasedOnTeam();
  }, [selectedTeam]);

  /**
   * set the tasks based on selected member
   */
  useEffect(() => {
    const setTasksBasedOnMember = async () => {
      if (projectsAndTeams && selectedProject && selectedTeam && selectedMember) {
        try {
          setTasksList([]);
          const tasksResp = await taskService.fetchTasksList();
          const tasks = tasksResp.filter((task) => task.project === selectedProject);
          const selectedMemberTasks = tasks.filter((task) => {
            const isPresent = task.profiles.find((member) => member.id === selectedMember.id);
            if (isPresent) {
              return true;
            }
            return false;
          });
          selectedMemberTasks.forEach((task) => {
            const completedSubTask = task.subTasks.filter((subTask) => subTask.done);
            // eslint-disable-next-line no-param-reassign
            task.totalSubTasks = task.subTasks.length;
            // eslint-disable-next-line no-param-reassign
            task.completedTasks = (completedSubTask && completedSubTask.length > 0)
              ? completedSubTask.length : 0;
            const date = new Date(task.createdDate);
            const shortDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
            // eslint-disable-next-line no-param-reassign
            task.shortDate = shortDate;
          });
          setTasksList(selectedMemberTasks);
        } catch (err) {
          log.error('Error fetching tasks list..', err);
        }
      }
    };
    setTasksBasedOnMember();
  }, [selectedMember]);

  return (
    <View style={styles.taskScreenContainer}>
      {(projectsAndTeams) ? (
        <ScrollView>
          <View style={styles.projectInfoWrapper}>
            <ProjectAndTeamSelection
              projects={projects}
              teams={teams}
              selectedProject={selectedProject}
              selectedTeam={selectedTeam}
              onProjectSelection={(proj) => { setSelectedProject(proj.value); }}
              onTeamSelection={(team) => setSelectedTeam(team.value)}
            />
            <TeamMembersSelection
              teamMembers={teamMembers}
              selectedMember={selectedMember}
              setMemberSelection={(member) => setSelectedMember(member)}
            />
            <TeamMemberDetails selectedMember={selectedMember} tasksList={tasksList} />
          </View>
          <TasksList selectedMember={selectedMember} tasksList={tasksList} />
        </ScrollView>
      ) : <ActivityIndicator style={styles.inlineLoader} /> }
    </View>
  );
};

export default React.memo(TaskScreen);
