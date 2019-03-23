import React, {Component} from 'react';

const Data = React.createContext();

export default class DataProvider extends Component {

  state = {
    about: {
      blurb: `I’m Steve, a Full Stack Software Engineer, and I have a passion for problem solving all things computer related.  I build polished, pixel-perfect full-stack applications using the latest industry technologies.  After years of hands-on computer hardware experience, I transitioned into software engineering and have been loving it ever since.  I am a self-taught, motivated individual with technical skills that span over more than a decade.`
    },
    projects: {
      sucasa: {
        name: 'Su Casa',
        caption: 'Rental & Lodging Application',
        src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/sucasa.png',
        tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | AWS EBS | AWS S3 | Jest | Enzyme',
        description: 'Constructed a clean UI/UX experience while focusing on modularity via React *Optimized page load speeds from 3' +
          ' seconds to less than 1 second using image resizing/compression and minifying *Developed using Agile methodologies and tested' +
          ' with Jest/Enzyme *Deployed application using AWS Elastic Beanstalk, AWS S3 and Mongo Cloud Atlas',
        href: 'https://github.com/stevenchung213/overview-proxy/tree/DEMO_LOCALHOST'
      },
      zillwoah: {
        name: 'Zillwoah!',
        caption: 'Real Estate Application',
        src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/zillwoah.png',
        tech: 'React | Node | Express | PostgreSQL | CassandraDB | AWS EC2 | Nginx | K6 | New Relic | Loader.io',
        description: 'Efficiently scaled legacy codebase to handle 10 million records *' +
          'Created a seed script which randomly generated and populated PostgreSQL with 10 million records in less than 10 minutes;' +
          ' Cassandra in less than 20 minutes *' +
          'Reduced database query times to less than 0.5ms through indexing on Postgresql; less than 1ms on Cassandra *' +
          'Stress-tested and horizontally scaled micro-service to 4 servers using NGINX load balancer to handle 15,000 requests/second *' +
          'Deployed application using multiple AWS EC2 T2.micro instances',
        href: 'https://github.com/SDC-8/steve'
      },
      mymappins: {
        name: 'My Map Pins',
        caption: 'Save your own labeled marker on Google Maps',
        src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/mappins.png',
        tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | Bootstrap | Google Maps API',
        description: 'MVP application designed with Bootstrap in the front end *' + 'Rendered maps utilizing the Google-Maps-React library' +
          ' along with Google Maps API *Added functionality for user to attach a note to specified geographical Markers *' + "Saved" +
          " user's personalized note along with assigned coordinates using MongoDB",
        href: 'https://github.com/stevenchung213/mvp'
      },
      repofetcher: {
        name: 'Github Repo Fetcher',
        caption: 'Retrieve all repos of a Github user',
        src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/repofetcher.png',
        tech: 'React | Node | Express | MongoDB | Mongoose | jQuery | Bootstrap | GitHub API',
        description: 'Designed a clean interface for users to search for and display a Github user\'s repos *' +
          'Saves all user\'s repos to MongoDB *' +
          'Lists top 25 repo\'s sorted by fork count when not searching for specific user',
        href: 'https://github.com/stevenchung213/hrr34-fullstack-review'
      },
      portfolio: {
        name: 'Personal Site',
        caption: 'Portfolio',
        src: 'https://s3-us-west-1.amazonaws.com/my.portfolio/png/portfolio.png',
        tech: 'React | Node | Express | Material Design Bootstrap | Responsive Design | AWS S3 | Github Pages',
        description: 'Front end bootstrapped using Material Design' +
          ' for' +
          ' React *Webpack gzip compression, image compression and caching enabled for optimal loading speeds *' +
          'Deployed using Github Pages with conditional React rendering *Service worker implemented for offline availability (currently' +
          ' disabled since Github Pages deployment does not support service' +
          ' workers) *All image files hosted by S3 with caching enabled * Designed for Chrome',
        href: 'https://github.com/stevenchung213/stevenchung213.github.io'
      }
    }
  };

  render() {
    return (
      <Data.Provider>
        {this.props.children}
      </Data.Provider>
    );
  }
}
