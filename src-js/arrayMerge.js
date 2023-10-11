let rooms = [
  { _id: '11', anotherUser_id: '111', anotherUser_name: 'Name111' },
  { _id: '22', anotherUser_id: '222', anotherUser_name: 'Name222' },
  { _id: '33', anotherUser_id: '333', anotherUser_name: 'Name333' },
];

let activeSockets = [
  { socket_id: 'socket_id111', name: 'Name111', user_id: '111' },
  { socket_id: 'socket_id333', name: 'Name333', user_id: '333' },
  { socket_id: 'socket_id444', name: 'Name444', user_id: '444' },
];

rooms = rooms.map((room) => {
  let socket_id = null;
  activeSockets = activeSockets.filter((socket) => {
    if (socket.user_id === room.anotherUser_id) {
      socket_id = socket.socket_id;
      return false;
    }
    return true;
  });

  if (socket_id) {
    const result = {
      socket_id,
      user_id: room.anotherUser_id,
      name: room.anotherUser_name,
      room_id: room._id,
    };
    socket_id = null;
    return result;
  }
  const result = {
    socket_id: null,
    user_id: room.anotherUser_id,
    name: room.anotherUser_name,
    room_id: room._id,
  };
  return result;
});

const merged = [
  ...rooms,
  ...activeSockets.map((socket) => ({ ...socket, room_id: null })),
];
console.log('merged', merged);
// console.log('rooms', rooms);
// console.log('activeSockets', activeSockets);
