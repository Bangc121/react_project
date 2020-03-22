import React from "react";
import TodaysPlan from "../../components/TodaysPlan.js"

class MainPage extends React.Component {
    render() {
        return (
          <TodaysPlan
            boolValue={true}
            numValue={1}
            arrayValue={[1, 2, 3]}
            objValue={{ name: '제목', age: 30 }}
            nodeValue={<h1>노드</h1>}
            funcValue={() => {
              console.log("메시지");
            }}
          />
        );
    }
}

export default MainPage;