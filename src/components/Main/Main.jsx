import './Main.css'
import ProjectsHospital from './Projects/Hospital/ProjectsHospital';
import ProjectsResedent from './Projects/Resident/ProjectsResident';

const Main = () => {
    return ( 
        <>
        <ProjectsResedent />
        <ProjectsHospital />
        </>
     );
}
 
export default Main;