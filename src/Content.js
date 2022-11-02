import { useEffect, useState } from "react";
import {memo} from 'react';
/*
1 UseEffect(callback)
- Gọi mỗi khi component re-render
- Gọi sau khi thêm component vào DOM
2 UseEffect(callback, [])
- Chỉ gọi 1 lần sau khi component mounted
3 UseEffect(callback, [deps])
- Được gọi mỗi khi deps thay đổi

Callback luôn được gọi sau khi component mounted
Cleanup function luôn được gọi trước component unmounted
Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

Memo: React sẽ ghi nhớ kết quả render và bỏ qua các quá trình render không cần thiết,
nhằm tối ưu hóa việc hiệu năng của quá trình render
*/



// export default  memo(ContentCountdown);
// export default  ContentX;