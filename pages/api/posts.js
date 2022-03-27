import { supabase } from "utils/supabase";

export default async function getPosts(req, res) {
  const { data, error } = await supabase.from("posts").select();
  if (error) {
    return res.status(400).json({ data: error });
  } else return res.status(200).json({ data: data });
}
