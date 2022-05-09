import { ApiQuery } from '../api/ApiQuery';

export const TodoList: React.FC = ({}) => {
  return (
    <div>
      <h1>TODO LIST</h1>
      <ApiQuery gqlKey='hello'>
        {({ data }) => {
          if (!data) return <div>No data...</div>;
          return data?.hello;
        }}
      </ApiQuery>
    </div>
  );
};
