import { useNavigation } from "react-router-dom"

const SaveSeller = async ({ request }) => {
  const redirect = useNavigation()
  const formData = await request.formData();
  const saveProperty = await fetch("http://localhost:8082/property", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  console.log(saveProperty);
  return redirect("/sellers")
};



export {SaveSeller};
