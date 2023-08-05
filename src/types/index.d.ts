interface MessageCount {
  count: string;
  timeBucket: string;
  channelId: string;
}

interface Channel {
  label?: string;
  value?: string;
  type?: number;
  guild?: string;
  guildId?: string;
  parentId?: string | null;
  permissionOverwrites?: string[];
  id?: string;
  name?: string;
  rawPosition?: number;
  createdTimestamp?: Date | number;
  permissionOverwrites?: string[];
  messages?: string[];
  threads?: [];
  nsfw?: boolean;
  bitrate?: number;
  userLimit?: number;
  rtcRegion?: string | null;
  videoQualityMode?: string | null;
  topic?: string | null;
  lastMessageId?: string | null;
  rateLimitPerUser?: number;
}
