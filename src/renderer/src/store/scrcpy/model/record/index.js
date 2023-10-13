export default () => {
  const $path = window.nodePath

  return [
    {
      label: '文件存储地址',
      type: 'input.directory',
      field: '--record',
      value: $path.resolve('../'),
      placeholder: '默认值为执行应用的同级目录',
      tips: '截图和录制的音视频都存在这里',
    },
    {
      label: '录制视频格式',
      type: 'select',
      field: '--record-format',
      value: 'mp4',
      placeholder: '默认值为 mp4',
      options: [
        {
          label: 'mp4',
          value: 'mp4',
        },
        {
          label: 'mkv',
          value: 'mkv',
        },
      ],
    },
  ]
}