import { useApiQuery } from '../hook/useApiQuery';

type queryChildrenProps = {
  data: { [key: string]: string };
};

type ApiQueryProps = {
  gqlKey: string;
  variables?: any;
  children: ({ data }: queryChildrenProps) => React.ReactNode;
};

export const ApiQuery: React.FC<ApiQueryProps> = ({
  gqlKey,
  variables,
  children,
}) => {
  const { loading, error, data } = useApiQuery(gqlKey, variables);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return <>{children && children({ data })}</>;
};
