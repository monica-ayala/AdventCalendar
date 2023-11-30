import Sidebar from "../components/Sidebar";

export interface IWrapperProps {
  children: JSX.Element;
}

const Wrapper = ({ children }: IWrapperProps): JSX.Element => {
    return (
        <div className="flex h-screen">
          <div className="flex-none">
            <Sidebar />
          </div>
    
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      );
};

export default Wrapper;
