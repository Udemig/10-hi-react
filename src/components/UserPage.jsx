import React, { useEffect, useState } from "react";

const UserPage = () => {
  //* Kullanıcı state
  const [user, setUser] = useState(null);
  //* Bileşenin ekrana basılma olayını izledik ve sayfa yüklendiği anda API'ye istek attık.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      //* İstek başarılı olursa gelen veriyi jsona çevir
      .then((res) => res.json())
      //* Çevrilen veriyi user stateine aktar.
      .then((data) => setUser(data));
  }, []);
  console.log(user);

  return <div>{!user && <p>Yükleniyor...</p>}</div>;
};

export default UserPage;
