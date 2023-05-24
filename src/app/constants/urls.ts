import {environment} from "../../environments/environment";

const
  {
    API
  } = environment;

const users = `${API}/users`

const posts = `${API}/posts`

const urls = {
  users,
  byId:(id:number):string=>`${users}/${id}`,
  posts,
}

export {
  urls
}
