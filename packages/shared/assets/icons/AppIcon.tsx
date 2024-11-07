import React from 'react';

export const AppIcon: React.FC<React.SVGProps<SVGSVGElement>> = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="8" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M24.3994 15.3147C24.313 15.393 24.2194 15.4818 24.1182 15.5824C22.7477 16.9466 21.4842 18.9806 20.3567 21.3292C19.2395 23.6563 18.3084 26.1796 17.5591 28.4357C17.0596 29.9396 16.6625 31.2544 16.335 32.3387C16.1619 32.9117 16.0083 33.4204 15.8692 33.8586C15.7735 34.1603 15.6811 34.4389 15.5952 34.6685L15.593 34.6744C15.5342 34.8313 15.4002 35.1894 15.1851 35.4804C15.1206 35.5677 14.9834 35.7411 14.7638 35.9002C14.5459 36.058 14.0718 36.3232 13.4319 36.231C12.7752 36.1364 12.3852 35.7305 12.2098 35.4856C12.0407 35.2495 11.9648 35.0254 11.9321 34.9167C11.8218 34.5503 11.8218 34.141 11.8218 33.9465V33.945C11.8218 31.2051 10.9114 28.4039 10.3061 26.5411C10.1715 26.127 10.052 25.7593 9.96094 25.4489L13.3915 24.4422C13.4493 24.6392 13.538 24.9084 13.6466 25.2378C13.8105 25.7351 14.0195 26.3695 14.2357 27.0998C14.9974 24.8235 15.9602 22.2261 17.1336 19.7819C18.3328 17.284 19.8057 14.8304 21.5961 13.0484C22.1435 12.5036 22.6969 12.0459 23.2589 11.7309C23.8093 11.4223 24.5285 11.1619 25.3282 11.2783C26.1965 11.4048 26.8104 11.9209 27.19 12.4841C27.5418 13.0059 27.7263 13.6062 27.8344 14.1407C28.0519 15.2161 28.0603 16.561 27.9791 17.9376C27.9279 18.8047 27.8376 19.7332 27.7217 20.6875C28.0241 20.1048 28.3287 19.549 28.6323 19.0349C29.0969 18.248 29.5852 17.5138 30.0865 16.9172C30.5529 16.3621 31.1835 15.7374 31.9739 15.4269C32.8738 15.0735 34.0067 14.9925 34.9706 15.7504C35.7756 16.3832 36.086 17.3352 36.2339 18.0231C36.5407 19.4503 36.47 21.4234 36.3722 23.2367C36.3488 23.6714 36.3231 24.1046 36.2976 24.5338C36.2098 26.0152 36.1249 27.4482 36.1446 28.7281C36.1572 29.5442 36.2127 30.2192 36.3169 30.7408C36.3507 30.9101 36.3865 31.0467 36.4208 31.1555C36.4287 31.1545 36.4367 31.1535 36.4448 31.1525C36.6239 31.1294 36.788 31.1021 36.9823 31.0698C37.0934 31.0513 37.2145 31.0311 37.3539 31.0092C37.6815 30.9576 38.1086 30.8972 38.5304 30.8972V34.4724C38.4092 34.4724 38.2192 34.4922 37.9097 34.5409C37.836 34.5525 37.7489 34.567 37.6541 34.5827C37.4222 34.6211 37.1438 34.6672 36.9012 34.6985C36.5513 34.7435 36.0791 34.7876 35.6031 34.7304C35.1294 34.6736 34.4052 34.4859 33.8583 33.8395C33.2583 33.1304 32.9696 32.2354 32.8109 31.4412C32.6464 30.6176 32.5839 29.7001 32.5698 28.7832C32.5478 27.3556 32.644 25.7379 32.7334 24.2358C32.7577 23.828 32.7814 23.4287 32.8022 23.0441C32.8896 21.4234 32.9179 20.1229 32.8122 19.2309C32.4902 19.6166 32.1194 20.1609 31.7109 20.8527C30.8861 22.2495 30.0113 24.0692 29.1705 25.9675C28.3394 27.8436 27.5634 29.7462 26.9209 31.3215L26.907 31.3556C26.8839 31.4123 26.8608 31.4688 26.8379 31.5251C26.253 32.9593 25.7289 34.2446 25.412 34.8141C25.37 34.8896 25.3135 34.9851 25.2431 35.0839C25.188 35.1613 25.0521 35.3455 24.8331 35.5153C24.665 35.6455 23.9771 36.123 23.0784 35.7884C22.2645 35.4854 22.0242 34.7736 21.979 34.6347C21.8613 34.2737 21.8763 33.9262 21.8803 33.8322C21.8805 33.8284 21.8806 33.825 21.8808 33.822C21.8872 33.6616 21.9046 33.4916 21.9243 33.3325C22.0016 32.7113 22.1853 31.7229 22.4037 30.5831C22.462 30.2788 22.5236 29.9597 22.5876 29.6281C23.0156 27.4099 23.5517 24.632 23.9412 21.9738C24.1648 20.4478 24.3354 18.991 24.41 17.7269C24.4693 16.7228 24.4629 15.9129 24.3994 15.3147ZM25.1003 14.8044C25.1003 14.8044 25.0976 14.8055 25.0925 14.8071C25.0978 14.805 25.1003 14.8044 25.1003 14.8044ZM22.2878 33.0759C22.2866 33.078 22.2867 33.0777 22.2881 33.0753L22.2878 33.0759ZM25.4539 33.9518C25.4547 33.9938 25.4516 34.0027 25.4532 33.9648C25.4533 33.9618 25.4535 33.9575 25.4539 33.9518ZM12.1977 33.5371C12.1977 33.5371 12.1984 33.5354 12.1998 33.5325C12.1984 33.5357 12.1977 33.5371 12.1977 33.5371Z" fill="black" />
    </svg>
);