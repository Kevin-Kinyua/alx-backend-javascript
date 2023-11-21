/**
 * Contains the miscellaneous route handlers.
 * @author Kevin Kinyua <https://github.com/Kevin-Kinyua>
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;
  module.exports = AppController;