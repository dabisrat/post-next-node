import Image from 'next/image'
import { supabase } from '@PNN/libs/supabaseClient';

export const revalidate = 0;

async function getUsers() {
let { data: Users, error } = await supabase
.from('Users')
.select('*')

  if (error) console.error('error', error)
  return Users;
}

export default async function Home() {
  const users = await getUsers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {users?.map((user, i) =>  <li key={i}>{user.user_name}</li>)}
      </ul>
      <h1 className="text-4xl font-bold"> <a href="https://nextjs.org">Next.js!</a></h1>
    </main>
  )
}
