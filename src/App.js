import React, { useState, useEffect } from 'react';

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTime(new Date().toLocaleString());
    }, 3000);
  }, []);

  return (
    <>
      {loading ? <div>ローディング中...</div> : <div>ローディング完了: {time}</div>}
    </>
  );
}

export default App;