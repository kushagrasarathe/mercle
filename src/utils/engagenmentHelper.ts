export const engagementHelper = {
  engagementMessageOverTimeChartOptions: (
    messageCountList: MessageCount[],
    channels: Channel[]
  ) => {
    const channelsWithMultipleDates = channels.filter((channel) =>
      messageCountList.some(
        // @ts-ignore
        (message) => message.channelId === channel.value && message.count > 1
      )
    );

    const seriesData = channelsWithMultipleDates.map((channel) => {
      const channelMessages = messageCountList.filter(
        (message) => message.channelId === channel.value
      );
      const dataPoints = channelMessages.map((message) => ({
        x: new Date(message.timeBucket).getTime(),
        y: parseInt(message.count),
      }));
      return {
        name: channel.name,
        data: dataPoints,
      };
    });

    const options = {
      chart: {
        type: "line",
      },
      title: {
        text: "Engagement Messages Over Time",
      },
      xAxis: {
        type: "datetime",
        title: {
          text: "Date",
        },
      },
      yAxis: {
        title: {
          text: "Message Count",
        },
      },
      series: seriesData,
    };

    return options;
  },
};
