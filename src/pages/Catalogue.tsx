import Wrapper from '../containers/Wrapper';
import { days } from '../../back-end/info.ts';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar.tsx';

export default function Catalogue(): JSX.Element {

  return (
    <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 m-12 gap-1">
            {
                days.map((day, index) => {
                    return (
                        <Card 
                            day={day}
                            color={index % 2 ? "red" : "white"}
                            />
                    )
                })
            
            }
</div>
    </Wrapper>
  );
}