import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string?.length; i += 1) {
    hash = string?.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value?.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

const stringAvatar = (name: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export const UserAvatar = () => {
  let userName = "User"

  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar('username')} />
    </Stack>
  );
}