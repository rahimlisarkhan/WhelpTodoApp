import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// const stringAvatar = (name: string) => {
//   return {
//     children: `${name?.split(' ')[0][0]}${name?.split(' ')[1][0]}`,
//   };
// }

export const UserAvatar = () => {
  // let userName = localStorage?.get("user") || "dsds"

  return (
    <Stack direction="row" spacing={2}>
      <Avatar style={{background:"#e884b0"}} children={"AD"} />
    </Stack>
  );
}
