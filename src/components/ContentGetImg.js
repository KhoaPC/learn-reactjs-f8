import { useState, useEffect } from "react";

export default function ContentGetImg({title}) {
  document.title = title;

  const [avatars, setAvatars] = useState();

  useEffect(() => {
    // CleanUp
    return () => {
      // Xóa URL khỏi bộ nhớ khi thêm ảnh khác
      avatars && avatars.map((avatar) => URL.revokeObjectURL(avatar.preview));
    };
  }, [avatars]);

  const handlePreviewAvatar = (e) => {
    const files = [...e.target.files];
    files.map((file) => {
      // Tạo URL tạm thời trong bộ nhớ khi web hoạt động
      file.preview = URL.createObjectURL(file);
      console.log(file.preview);
      return file.preview;
    });
    setAvatars(files);
  };

  return (
    <div>
      <input type="file" multiple onChange={handlePreviewAvatar} />

      {avatars &&
        avatars.map((file) => (
          <img key={file.name} src={file.preview} alt="" width="80%" />
        ))}
    </div>
  );
}