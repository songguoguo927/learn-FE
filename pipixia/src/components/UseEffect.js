import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {//使用副作用函数来订阅好友的在线状态
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//返回一个函数来指定如何“清除”副作用
    return () => {//并通过取消订阅来进行清除操作：
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
export default FriendStatus;