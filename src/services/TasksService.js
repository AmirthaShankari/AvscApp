/* eslint-disable class-methods-use-this */
// App Imports
import HttpService from './HttpServices';
import { log } from '../utils/logger';
import { AppConstants } from '../constants/AppConstants';

export default class TasksService {
  /**
   * Function to fetch the list of projects and teams
   */
  async fetchProjectsAndTeams() {
    try {
      log.info('Fetching projects and team...');
      const response = await HttpService.get(AppConstants.API_ENDPOINTS.PROJECTS_AND_TEAMS);
      return response.data;
    } catch (err) {
      log.error('Error while fetching projects and team...', err);
      throw err;
    }
  }

  /**
   * Function to fetch the tasks list based on team member selection
   */
  async fetchTasksList() {
    try {
      log.info('Fetching tasks list...');
      const response = await HttpService.get(AppConstants.API_ENDPOINTS.TASKS_LIST);
      return response.data;
    } catch (err) {
      log.error('Error while fetching tasks list...', err);
      throw err;
    }
  }
}
