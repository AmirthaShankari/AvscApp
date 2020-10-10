/* eslint-disable no-nested-ternary */
// React Imports
import React, { useState, useEffect } from 'react';
import {
  View, ActivityIndicator, Text
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

// App Imports
import { styles } from './styles';
import { log } from '../../utils/logger';
import {
  ProjectAndTeamSelection, TeamMembersSelection, TeamMemberDetails, TasksList
} from '../../components';
import { AppConstants } from '../../constants/AppConstants';

const TaskScreen = () => {
  log.info('Task screen rendered...');

  // State Declarations
  const [projectsAndTeams, setProjectsAndTeams] = useState();
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
        setProjectsAndTeams(AppConstants.DATA.PROJECTS_AND_TEAMS);
      };
      fetchProjectsAndTeams();
    }, [projectsAndTeams])
  );

  /**
   * Set the available projects and default the first project as selected project
   */
  useEffect(() => {
    const fetchProjectsAndTeams = async () => {
      if (projectsAndTeams) {
        const projectsArr = AppConstants.DATA.PROJECTS_AND_TEAMS.map(
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
      if (projectsAndTeams && selectedProject) {
        const selectedProj = projectsAndTeams.find((proj) => proj.id === selectedProject);
        const teamsArr = selectedProj.teams.map((team) => ({ label: team.name, value: team.id }));
        setTeams(teamsArr);
        setSelectedTeam(teamsArr[0].value);
      }
    };
    setTeamsBasedOnProj();
  }, [selectedProject]);

  /**
   * Set the members based on team selection
   */
  useEffect(() => {
    const setMembersBasedOnTeam = async () => {
      if (projectsAndTeams && selectedProject && selectedTeam) {
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
        const tasks = AppConstants.DATA.TASKS.filter((task) => task.project === selectedProject);
        const selectedMemberTasks = tasks.filter((task) => {
          const isPresent = task.profiles.find((member) => member.id === selectedMember.id);
          if (isPresent) {
            return true;
          }
          return false;
        });
        setTasksList(selectedMemberTasks);
      }
    };
    setTasksBasedOnMember();
  }, [selectedMember]);

  return (
    <View style={styles.taskScreenContainer}>
      {(projectsAndTeams) ? (
        <View style={{ position: 'absolute', zIndex: 0 }}>
          <ProjectAndTeamSelection
            projects={projects}
            teams={teams}
            selectedProject={selectedProject}
            selectedTeam={selectedTeam}
            onProjectSelection={(proj) => setSelectedProject(proj.value)}
            onTeamSelection={(team) => setSelectedTeam(team.value)}
          />
          <TeamMembersSelection
            teamMembers={teamMembers}
            selectedMember={selectedMember}
            setMemberSelection={(member) => setSelectedMember(member)}
          />
          <TeamMemberDetails selectedMember={selectedMember} />
          <TasksList selectedMember={selectedMember} tasksList={tasksList} />
        </View>
      ) : <ActivityIndicator style={styles.inlineLoader} /> }
    </View>
  );
};

export default React.memo(TaskScreen);
