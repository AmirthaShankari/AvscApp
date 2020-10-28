/* eslint-disable class-methods-use-this */
// App Imports
import HttpService from './HttpServices';
import { log } from '../utils/logger';
import { AppConstants } from '../constants/AppConstants';

export default class VendorService {
  /**
   * Function to fetch the list of projects and teams
   */
  async fetchVendorProfileDetails() {
    try {
      log.info('Fetching Vendor profile details...');
      const response = await HttpService.get(AppConstants.API_ENDPOINTS.VENDOR_PROFILE_DETAILS);
      return response.data;
    } catch (err) {
      log.error('Error while fetching vendor profile details...', err);
      throw err;
    }
  }
}
