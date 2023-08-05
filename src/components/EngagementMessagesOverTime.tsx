"use client";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { channels, messageCountList } from "@/utils/data";
import { engagementHelper } from "@/utils/engagenmentHelper";

const EngagementMessagesOverTime = () => {
  const options = engagementHelper.engagementMessageOverTimeChartOptions(
    messageCountList,
    channels
  );

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EngagementMessagesOverTime;
