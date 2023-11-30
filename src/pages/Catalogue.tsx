import Wrapper from "../containers/Wrapper";
import Card from "../components/Card";
import { SupabaseContext } from "../App.tsx";
import React from "react";
import { useEffect, useState } from "react";
import { IDay } from "../types/index.ts";

export default function Catalogue(): JSX.Element {
  const [days, setData] = useState<IDay[]>([]);
  const supabase: any = React.useContext(SupabaseContext);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data: giftData, error } = await supabase
          .from("gifts")
          .select("id, password, letterDescription, status, name")
          .order("id", { ascending: true });

        console.log("giftData:", giftData);
        console.log("error:", error);

        if (error) {
          console.log("Error fetching gifts:", error);
          return;
        }

        if (giftData) {
          const processedData = giftData.map((day: IDay) => ({
            id: day.id,
            password: day.password,
            letterDescription: day.letterDescription,
            status: day.status,
            name: day.name,
          }));
          setData(processedData);
        }
      } catch (error) {
        console.log("Error fetching gifts:", error);
      }
    };

    fetch();
  }, []);

  return (
    <Wrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 m-12 gap-1">
        {days.map((day, index) => {
          return (
            <>
              <Card
                day={day}
                color={index % 2 ? "red" : "white"}
              />
            </>
          );
        })}
        
      </div>
    </Wrapper>
  );
}
