import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>text</Htag>
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
    </>
  );
}
