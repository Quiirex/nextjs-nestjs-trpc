import { trpc } from '@web/app/trpc';

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Luka` });
  return <div>{greeting}</div>;
}
