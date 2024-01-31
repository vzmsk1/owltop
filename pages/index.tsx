import { useEffect, useState } from 'react';
import { Button, Htag, P, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>title</Htag>
      <Button appearance='primary' className={'dffg'} arrow='right'>
        button
      </Button>
      <Button appearance='ghost' arrow='down'>
        button
      </Button>
      <P size='m'>
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>
      <Tag size='s'>ghost</Tag>
      <Tag size='m' color='red'>
        red
      </Tag>
      <Tag size='s' color='green'>
        green
      </Tag>
      <Tag color='primary'>primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </>
  );
}

export default withLayout(Home);
