import 'react-day-picker/dist/style.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/routes';


function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
     <Toaster />
    </div>
  );
}

export default App;
