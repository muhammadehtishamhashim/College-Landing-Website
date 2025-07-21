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
      <IntroPreview collegeInfo={collegeInfo} />
      <Achievements />
      <ProgramsPreview programs={programs} />
      <FacilitiesPreview facilities={facilities} />
    </MainLayout>
  );
}
