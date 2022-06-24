import Image1 from '../assets/images/Frame7.png';
import Image1a from '../assets/images/proj1a.png';
import Image1b from '../assets/images/proj1b.png';
import Image1c from '../assets/images/proj1c.png';
import Image1d from '../assets/images/proj1d.png';
import Image1e from '../assets/images/proj1e.png';
import Image3 from '../assets/images/frame1a.png';
import Image4 from '../assets/images/frame2a.png';

const ProjectData = {
    project1:{
        images:[Image1, Image1a, Image1b, Image1c, Image1d, Image1e ],
        title: 'Smart Farming',
        description: 'Smart farming is a system that is built for monitoring the crop field with the help of sensors (light, humidity, temperature, soil moisture, crop health, etc.) and automating the irrigation system.'
    },
    project2:{
        images:[Image3, Image4],
        title: 'BookWorm',
        description: 'Bookworm is a platform to read a variety of books online.'
    }
}

export default  ProjectData;