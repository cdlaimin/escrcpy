const { adbPath, scrcpyPath, gnirehtetPath, desktopPath }
  = window?.electron?.configs || {}

const defaultLanguage = window.electron?.process?.env?.LOCALE

export default {
  label: 'preferences.common.name',
  field: 'common',

  children: {
    theme: {
      label: 'preferences.common.theme.name',
      field: 'theme',
      type: 'Select',
      value: 'system',
      placeholder: 'preferences.common.theme.placeholder',
      options: [
        {
          label: 'preferences.common.theme.options[0]',
          value: 'light',
        },
        {
          label: 'preferences.common.theme.options[1]',
          value: 'dark',
        },
        {
          label: 'preferences.common.theme.options[2]',
          value: 'system',
        },
      ],
    },
    language: {
      label: 'common.language.name',
      field: 'language',
      type: 'LanguageSelect',
      value: defaultLanguage,
      placeholder: 'common.language.placeholder',
      options: [
        {
          label: 'common.language.zh_CN',
          value: 'zh_CN',
        },
        {
          label: 'common.language.zh_TW',
          value: 'zh_TW',
        },
        {
          label: 'common.language.en_US',
          value: 'en_US',
        },
      ],
    },
    savePath: {
      label: 'preferences.common.file.name',
      field: 'savePath',
      type: 'PathInput',
      value: desktopPath,
      placeholder: 'preferences.common.file.placeholder',
      tips: 'preferences.common.file.tips',
      properties: ['openDirectory'],
    },
    adbPath: {
      label: 'preferences.common.adb.name',
      field: 'adbPath',
      value: adbPath,
      type: 'PathInput',
      placeholder: 'preferences.common.adb.placeholder',
      tips: 'preferences.common.adb.tips',
      properties: ['openFile'],
      filters: [{ name: 'preferences.common.adb.name', extensions: ['*'] }],
    },
    scrcpyPath: {
      label: 'preferences.common.scrcpy.name',
      field: 'scrcpyPath',
      value: scrcpyPath,
      type: 'PathInput',
      placeholder: 'preferences.common.scrcpy.placeholder',
      tips: 'preferences.common.scrcpy.tips',
      properties: ['openFile'],
      filters: [{ name: 'preferences.common.scrcpy.name', extensions: ['*'] }],
    },
    gnirehtetPath: {
      label: 'preferences.common.gnirehtet.name',
      field: 'gnirehtetPath',
      value: gnirehtetPath,
      type: 'PathInput',
      placeholder: 'preferences.common.gnirehtet.placeholder',
      tips: 'preferences.common.gnirehtet.tips',
      properties: ['openFile'],
      filters: [
        { name: 'preferences.common.gnirehtet.name', extensions: ['*'] },
      ],
    },
    scrcpyAppend: {
      label: 'preferences.common.scrcpy.append.name',
      field: 'scrcpyAppend',
      value: undefined,
      type: 'Input',
      placeholder: 'preferences.common.scrcpy.append.placeholder',
      tips: 'preferences.common.scrcpy.append.tips',
      props: {
        type: 'textarea',
        rows: 4,
      },
      span: 24,
    },
    autoConnect: {
      label: 'preferences.common.auto-connect.name',
      field: 'autoConnect',
      type: 'Switch',
      value: undefined,
      placeholder: 'preferences.common.auto-connect.placeholder',
    },
    autoMirror: {
      label: 'preferences.common.auto-mirror.name',
      field: 'autoMirror',
      type: 'Switch',
      value: undefined,
      placeholder: 'preferences.common.auto-mirror.placeholder',
    },
    gnirehtetFix: {
      label: 'preferences.common.gnirehtet.fix.name',
      field: 'gnirehtetFix',
      type: 'Switch',
      value: undefined,
      placeholder: 'preferences.common.gnirehtet.fix.placeholder',
      tips: 'preferences.common.gnirehtet.fix.tips',
    },
    debug: {
      label: 'preferences.common.debug.name',
      field: 'debug',
      type: 'Switch',
      value: undefined,
      placeholder: 'preferences.common.debug.placeholder',
      tips: 'preferences.common.debug.tips',
    },
  },
}
