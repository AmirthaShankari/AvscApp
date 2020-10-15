// App Imports
import HttpService from './HttpServices';
import { log } from '../utils/logger';
import { AppConstants } from '../constants/AppConstants';

export default class TasksService {
  // eslint-disable-next-line class-methods-use-this
  async fetchProjectsAndTeams() {
    try {
      log.info('Fetching projects and team...');
      const response = await HttpService.get(AppConstants.API_ENDPOINTS.PROJECTS_AND_TEAMS);
      return response.data;
    } catch (err) {
      log.error('Error while fetching projects and team...', err);
      return [];
    }
  }
}
