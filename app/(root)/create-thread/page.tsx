import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import PostThread from "@/components/forms/PostThread";

const Page = async () => {
  console.log("loaded create thread");
  const user = await currentUser();
  console.log("await current user");

  if (!user) return null;
  console.log("If no see, returned null");

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <>
      <h1 className="head-text">Create Thread</h1>
      <PostThread userId={JSON.parse(JSON.stringify(userInfo._id))} />
    </>
  );
};

export default Page;
