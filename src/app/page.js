import MainLayout from '../layout/MainLayout';
import HeroSection from './_components/home/HeroSection';
import IntroPreview from './_components/home/IntroPreview';
import Achievements from './_components/home/Achievements';
import ProgramsPreview from './_components/home/ProgramsPreview';
import FacilitiesPreview from './_components/home/FacilitiesPreview';
import collegeInfo from '../../data/college-info.json';
import programs from '../../data/programs.json';
import facilities from '../../data/facilities.json';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection collegeInfo={collegeInfo} />
      
      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <IntroPreview collegeInfo={collegeInfo} />
      
      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <Achievements />
      
      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <ProgramsPreview programs={programs} />
      
      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <FacilitiesPreview facilities={facilities} />
    </MainLayout>
  );
}
