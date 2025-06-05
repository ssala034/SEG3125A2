// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import { Datepicker, setOptions } from '@mobiscroll/react';
//
// setOptions({
//     theme: '',
//     themeVariant: 'light'
// });
//
// function Picker() {
//     const today = new Date();
//     const yyyy = today.getFullYear();
//     const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//     const dd = String(today.getDate()).padStart(2, '0');
//     const hours = today.getHours().toString().padStart(2, '0'); // Ensures 2-digit format
//     const minutes = today.getMinutes().toString().padStart(2, '0'); // Ensures 2-digit format
//
//     const formattedDate = `${yyyy}-${mm}-${dd} ${hours}:${minutes}`;
//     return (
//         <div>
//             <Datepicker
//                 controls={['calendar', 'timegrid']}
//
//                 invalid={[
//                     {
//                         start: '1800-01-01',
//                         end: formattedDate,
//                         // end: '2025-06-04 14:00',
//                     }
//                 ]}
//
//                 // invalid={{
//                 //     start: '1800-01-01',
//                 //     end: formattedDate,
//                 // }}
//                 touchUi={true}
//             />
//         </div>
//     );
// }
//
// export default Picker;


import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions } from '@mobiscroll/react';

setOptions({
    theme: '',
    themeVariant: 'light'
});

function Picker({ value, onChange }) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const hours = today.getHours().toString().padStart(2, '0');
    const minutes = today.getMinutes().toString().padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd} ${hours}:${minutes}`;

    return (
        <div>
            <Datepicker
                value={value}
                onChange={onChange}
                controls={['calendar', 'timegrid']}
                invalid={[{
                    start: '1800-01-01',
                    end: formattedDate,
                }]}
                touchUi={true}
            />
        </div>
    );
}

export default Picker;
