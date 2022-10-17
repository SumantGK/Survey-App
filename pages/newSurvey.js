import NewSurvey from '../src/modules/newSurvey';
import MainLayout from '../src/layouts/MainLayout';

const DashboardPage = () => {
  return (
    <>
      <MainLayout>
        <NewSurvey />
      </MainLayout>
    </>
  );
};

export default DashboardPage;
