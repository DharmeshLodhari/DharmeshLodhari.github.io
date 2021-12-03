'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.json": "321dc32eb7c4ac4a9122e262c3da2e7b",
"assets/assets/config/bes.json": "fe0a0c55c215a310fb39f0d747480d4b",
"assets/assets/config/purmo.json": "9113953a3aefddc6fe5c858f26fa8b95",
"assets/assets/config/purmo_prod.json": "16018738f9909cbe76b3535d1a890025",
"assets/assets/config/salus.json": "c2de22c29182b2ff8ee627a7cbc21937",
"assets/assets/fake_data/fake_device_management_purmo.json": "81d26e9d3576d4466a8ea10f7801b69f",
"assets/assets/fake_data/fake_device_management_salus.json": "d9fbc53343e03bfbcdb8b5be8e2c6354",
"assets/assets/fake_data/fake_profile.json": "22035b11e1d811451e3fd967bb9276a5",
"assets/assets/fonts/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/assets/fonts/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/assets/fonts/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/assets/fonts/OpenSans-Semibold.ttf": "33f225b8f5f7d6b34a0926f58f96c1e9",
"assets/assets/fonts/SmartHomeApp.ttf": "efd65a9e4906299a1447a7c3a211edd2",
"assets/assets/json/da.json": "b9f7b5b65d4df396ae9d8732ec84ba6c",
"assets/assets/json/de.json": "8c9fe6072c4cdeee59bde10ac198c9d0",
"assets/assets/json/en.json": "70d989aca9df11f2f61268d50260c007",
"assets/assets/json/fr.json": "af14da39a4dfa32cdcc99154216fef56",
"assets/assets/json/nl.json": "ae27c0246154566f62ec64ea704c82a5",
"assets/assets/json/no.json": "3d943445964bb335039d6320d6042a05",
"assets/assets/json/pl.json": "29692a491127217f3c717fc79b7491d2",
"assets/assets/json/ro.json": "6cb29664e5c81a2fc91a76ee5b6e5bde",
"assets/assets/json/ru.json": "2b3be687c72f1759564e9023613f2b6f",
"assets/assets/json/sv.json": "f59ef14b594e6940b29d314551b78b28",
"assets/FontManifest.json": "25c0cbf9cb014e7ca5127b9056f42093",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/background_uk.jpg": "32572cf6c6be85ef8bfcb8eecb8973bd",
"assets/images/bes/background.jpg": "53c8cc5d1a644d8e4524f801d985297c",
"assets/images/bes/home_icon.png": "db26aac0583cd3412c13792eae2083ff",
"assets/images/header_pattern.png": "5708584e20e8f33863aeb4611e8a8b08",
"assets/images/icons/battery_critical.svg": "3bd345bfe63900d0023c488d87bbd70d",
"assets/images/icons/battery_full.svg": "5232e96a6074c94debd879103cfd717d",
"assets/images/icons/door_close.svg": "3553383e7b4c10fcba830e719e684d13",
"assets/images/icons/door_open.svg": "5f5e5a23ddf5d28494e8559ccaf79ab3",
"assets/images/icons/eye_magnify.svg": "0509be36ecadf278004c331cd64284e8",
"assets/images/icons/icon_add_blue.svg": "4ad7f56b1850ef727531c47d85c335c6",
"assets/images/icons/icon_add_blue_outline.svg": "49d7eb11fc63620e73e4403d5cebf0a6",
"assets/images/icons/icon_add_gray.svg": "72b9013cdc3fde67c121addda74a38fa",
"assets/images/icons/icon_airplane.svg": "01ebaf1a3433949ce2dc03843a27dc73",
"assets/images/icons/icon_air_conditioning_snowflake.svg": "aa09e465bdd3247a688c42e8aa0ec99b",
"assets/images/icons/icon_alert_red.svg": "3d83054dc1431e1f9f0df5ed962c61dd",
"assets/images/icons/icon_alert_triangle_red.svg": "7adfdff78f6b41ab46539d7f72049569",
"assets/images/icons/icon_auto_grey.svg": "13892aab667ff264e95b956dfeff42b3",
"assets/images/icons/icon_battery_critical.svg": "3bd345bfe63900d0023c488d87bbd70d",
"assets/images/icons/icon_battery_full.svg": "5232e96a6074c94debd879103cfd717d",
"assets/images/icons/icon_battery_half.svg": "a383f0c816d7f314f881ba2286d6f05e",
"assets/images/icons/icon_battery_low.svg": "92ae11bc43baf338d7ea900fc243ff5a",
"assets/images/icons/icon_battery_most.svg": "a0d6049300503950b5bcbf74139a58b5",
"assets/images/icons/icon_camera.svg": "071edfb21cb7c5d0274f48ad23de92ef",
"assets/images/icons/icon_check_green.svg": "bec61ecc7effd01f0c50f058b99df058",
"assets/images/icons/icon_circle_check_blue.svg": "3294fe1ae9d5329de5d9073443ce6624",
"assets/images/icons/icon_circle_red.svg": "2e4f4353f047426c520a27ad70bae427",
"assets/images/icons/icon_close_x.svg": "ff181881872bbf50c81692f452cf8b23",
"assets/images/icons/icon_close_x_blue.svg": "4a291df70f14f3c57b172fa3423c98f6",
"assets/images/icons/icon_collapse.svg": "12b6861f7bd556f73e26ada708e2897b",
"assets/images/icons/icon_connected.svg": "7ad8490840ddb86c94add2f767bb24ed",
"assets/images/icons/icon_countdown.svg": "2af184b176c2087b60410af9ff618c6a",
"assets/images/icons/icon_customized_schedule.svg": "5dc9c57cc94e2790f18051d2d3517a24",
"assets/images/icons/icon_delete_bar.svg": "7edadab3ecfa401c00fb1c78759eeb44",
"assets/images/icons/icon_delete_grey.svg": "1a88576b1035a353c9552df61018429d",
"assets/images/icons/icon_down.svg": "a3f29bf85851a9e08115c056c38e300a",
"assets/images/icons/icon_droptriangle.png": "83e9893a7d8abaf5ded3900f07aec113",
"assets/images/icons/icon_edit_blue.svg": "fe7175265e2ef979348b686bc29109c6",
"assets/images/icons/icon_edit_white.svg": "6bc96be762e8a29b8b2cc65a248794fc",
"assets/images/icons/icon_expand.svg": "1fd3e9a1ae8705d58962b4a70fc6ca07",
"assets/images/icons/icon_fan_auto_grey.svg": "b52ec618d2de6c86d339e53aff08499e",
"assets/images/icons/icon_fan_speed2.svg": "6d70550caf171865dd81cdaa7c66257e",
"assets/images/icons/icon_folder.svg": "d8e40cfe13c42bd4fa5ae2c5da0202d5",
"assets/images/icons/icon_follow_air_conditioning_snowflake_on_blue.svg": "7a22f82ebb99d7879117cc77e36e5c7d",
"assets/images/icons/icon_follow_heater_on_orange.svg": "baa61920abe291516c1e03fa1a9f4f09",
"assets/images/icons/icon_follow_schedule.svg": "4ebdf40ee0fdab1bcecdcbd9768346c4",
"assets/images/icons/icon_groups.svg": "4fc20ab1c48e4b85b2595449f39b1d95",
"assets/images/icons/icon_hamburger_white.svg": "01a84816d92f9cdb3a5ff1ed306b46e3",
"assets/images/icons/icon_heater_off_grey.svg": "f877119545415c6e561cc191d0867ff3",
"assets/images/icons/icon_hide_detail_eye.svg": "5fe1ca568a936d1a514a71d2561d3c78",
"assets/images/icons/icon_history_graph_active.svg": "334a82ccb7911be74188567da1fa11aa",
"assets/images/icons/icon_history_list_active.svg": "0c797d2a779d3cf6718211790d1ec7aa",
"assets/images/icons/icon_hold_eco.svg": "2307bcb08d95ea12b9ce1e96e4649fd1",
"assets/images/icons/icon_humidity_blue.svg": "1b62d59cc5a68e88871e49200300f8be",
"assets/images/icons/icon_humidity_grey.png": "5ee3d7e1b5897a9b882d4c61c6a82471",
"assets/images/icons/icon_light_switch_white.svg": "ec73c2edbd843c994f9e48158152b5d3",
"assets/images/icons/icon_lock.svg": "726a122501b78b8c29da0e43dc603676",
"assets/images/icons/icon_lock_grey.svg": "c325512c092427fa8a1b7b97a2062264",
"assets/images/icons/icon_manual.png": "e4df1057f24f763b16b299510c34ad31",
"assets/images/icons/icon_manual.svg": "8e21d6c4f4712c5bdbddb411b531bb9c",
"assets/images/icons/icon_no_connection.svg": "0ec0686eb576e6132dc90cc6f9df48b2",
"assets/images/icons/icon_off.svg": "7839eac6f46e9b0bcfd0bc9aa1b48350",
"assets/images/icons/icon_one_touch.svg": "79fcb98a7f5322a12bdcbbec930300c0",
"assets/images/icons/icon_pair_remote.svg": "8e91dc58bbeff7ddfce56b4aaefc75f8",
"assets/images/icons/icon_pc_fan_speed1_grey.svg": "7da494f7e8996c7a98feecc228b3fc40",
"assets/images/icons/icon_pc_fan_speed2_grey.svg": "1377aaee376ac25db8b9d90cf6c926a8",
"assets/images/icons/icon_pc_fan_speed3_grey.svg": "86041c3107013839cc824fff5829cc1e",
"assets/images/icons/icon_permanent_hold.svg": "18493fb089c9a34324e4e67db75ef4f2",
"assets/images/icons/icon_pin_blue.svg": "2a21c5d8305a516cf0ace3cc375b640f",
"assets/images/icons/icon_pin_blue_filled.svg": "22693f6779629a5d71b46cd496f08d5b",
"assets/images/icons/icon_profile.svg": "0976def3653183e0dc6f1c6d6caabc9d",
"assets/images/icons/icon_receiver.svg": "d192837fd29c7adadadf76a5e8b4363d",
"assets/images/icons/icon_receiver_grey.svg": "7c851462af1746683a2847234daf411c",
"assets/images/icons/icon_receiver_switch_off.svg": "8a311c8bfed605900a57532e6dbc7152",
"assets/images/icons/icon_receiver_switch_on.svg": "b1d39864710e521c86576c19fa8c9907",
"assets/images/icons/icon_rss.svg": "14012ed890778cf93477e39e7fb1723a",
"assets/images/icons/icon_scan_my_home.svg": "0586a4300bc877352fb59d8d07810959",
"assets/images/icons/icon_settings_gear.svg": "b2cde70324192e8a013a19ca19e04eae",
"assets/images/icons/icon_show_detail_eye.svg": "ff840156b2020738c32109fbbc6e7e8e",
"assets/images/icons/icon_side.svg": "821e070e242923bede90a5c894da7666",
"assets/images/icons/icon_signal_0.svg": "04a20fd42ece9f0a7eda49621a979d39",
"assets/images/icons/icon_signal_0_white.svg": "77b0069c4de39442a3068aca362a920f",
"assets/images/icons/icon_signal_1.svg": "27738fec69dcf22510c09683280c32bc",
"assets/images/icons/icon_signal_1_white.svg": "d58c4eae2ee666233fcb25a55a478bee",
"assets/images/icons/icon_signal_2.svg": "bd903eb1e21e249f2dd4cf3cb874be0a",
"assets/images/icons/icon_signal_2_white.svg": "125cbda0186f6674aec2a26965cd714d",
"assets/images/icons/icon_signal_3.svg": "3cf11e5a343f17969aea250d4fd0b6e6",
"assets/images/icons/icon_signal_3_white.svg": "2378c9eb8b70c36133abb2d0ddb47f42",
"assets/images/icons/icon_smart_relay_off_grey.svg": "5003c59f79f7f62f288ebee1915f5b07",
"assets/images/icons/icon_smart_relay_on_orange.svg": "a305031392725782ee3a7f3a0ef0bf9b",
"assets/images/icons/icon_tap.svg": "b4ab2c829d8c3f4edbdf025f06c8a310",
"assets/images/icons/icon_tap_heat.svg": "126f5934a43a71b9ac0958e9dbe27842",
"assets/images/icons/icon_temporary_hold.svg": "b5a2686db260754460bcc9fcb1a7f59b",
"assets/images/icons/icon_temp_cool.svg": "21933999276e6548b204ef11ede94d42",
"assets/images/icons/icon_temp_fan_grey.svg": "7556eb4f363167678330ef40c17e2a66",
"assets/images/icons/icon_trv_grey.svg": "ddf4a44d572b2c20cf02a500cbc1d453",
"assets/images/icons/icon_tstat_arc.svg": "3cea0d0c11c3bd3f4df3a44a6b9b983f",
"assets/images/icons/icon_unlock.svg": "3fdbaf7ae12e61c578aa20410815cf9e",
"assets/images/icons/icon_unlock_grey.svg": "cbdb6aa92e6757eacd474dcb7887a35b",
"assets/images/icons/icon_unpin.svg": "ba4dc762145189b41c31f8d8f88669c9",
"assets/images/icons/icon_unpin_blue.svg": "2f8d35cfc71b9feac609dcfc9cc662b0",
"assets/images/icons/icon_up_down.svg": "ddd32ee6ab761cb8063814ed6b696710",
"assets/images/icons/icon_water_heater_on.svg": "43a859e9ccf562a079596df0b0836745",
"assets/images/icons/icon_water_heater_on_grey.svg": "f1217a52d7e5a33b8d6df3244d800239",
"assets/images/icons/icon_wifi_grey.svg": "8c2de86b59f8213d9403a4ef76ca4eb8",
"assets/images/icons/icon_window_grey.svg": "713aa722864fb5600d91dbf3f52ee8d4",
"assets/images/icons/icon_window_open_mini.svg": "26bc4a74b4dbe6dff8479eeec2aab9f5",
"assets/images/icons/logo_blue.svg": "194b0c6d0e3dbb8d888e55d1a21f1c23",
"assets/images/icons/my_status/A.svg": "78630777b509a18e2b09975f6a7b5eff",
"assets/images/icons/my_status/Airplane.svg": "cf5fa593e075b731a6548f3315cc1683",
"assets/images/icons/my_status/Away.svg": "ad18a42a7e56528ed427bfcec08f26b1",
"assets/images/icons/my_status/Balloons.svg": "e07c2c0b616c6e8a4fb97e37f2ca92f3",
"assets/images/icons/my_status/Candles.svg": "f4357cabd9de142911e2d39d05c9e2ce",
"assets/images/icons/my_status/Cloud.svg": "05256c3719192a3900257aeee752900e",
"assets/images/icons/my_status/Cone.svg": "b91a3f2c14867dfa964922a360a05cce",
"assets/images/icons/my_status/Exclamation.svg": "23fa33b483acb2b7635e90beb67d7fd1",
"assets/images/icons/my_status/Eye.svg": "8b288777850daff92b88efb78d7a0c24",
"assets/images/icons/my_status/Family.svg": "364edd05f077860fc3d8380bac644440",
"assets/images/icons/my_status/Flame.svg": "6459b1460bd8125a796d5f58dbfbd8e3",
"assets/images/icons/my_status/Gift.svg": "c0dc79514d2a9bbd17252bda02efccc3",
"assets/images/icons/my_status/House.svg": "76de5fa2168c8931f8efa24743afc34b",
"assets/images/icons/my_status/House_Snowflake.svg": "0a1cfbfe0a0907ad387b455079762be7",
"assets/images/icons/my_status/House_Sun.svg": "460f98de313bd9a5d8849d2671e3bdce",
"assets/images/icons/my_status/Keys.svg": "5bdcf57eef22f39fb8e55d66e3f74320",
"assets/images/icons/my_status/Leaf.svg": "840cbdf94267741e571ca849a4ecf8a1",
"assets/images/icons/my_status/Man_Hat.svg": "7cf951e4480a53e26ee9ca849e6a1306",
"assets/images/icons/my_status/Martini.svg": "a7bb1284e6331ba080ffc8cdb24b677e",
"assets/images/icons/my_status/Moon.svg": "14ddad9ea51d0079aa3f193a72fa4c1f",
"assets/images/icons/my_status/Snowflake.svg": "2a2ec294371aa2fc0461d9b872dd2b2c",
"assets/images/icons/my_status/Suitcase.svg": "1bb495b9ed4ced7c97fe0561e2e8e81b",
"assets/images/icons/my_status/Sun.svg": "cdfeb91f0e0a6bd92122a6f86b602404",
"assets/images/icons/my_status/Sun_Cloud.svg": "3b2c3e33831150e9d4846ee4f3c5d871",
"assets/images/icons/my_status/Umbrella.svg": "b4845a48a0fd6c49a546ec77bcba853e",
"assets/images/icons/pin_icon.svg": "7488e4e36ed838481fa848c6661c2648",
"assets/images/icons/receiver_category.svg": "325a1d1ae005aa7b2f841bd7d553ead9",
"assets/images/icons/setupWizard/Connect_Active.jpg": "c0804f2aeb07a8a99ea8e6e1fac2a8c3",
"assets/images/icons/setupWizard/Connect_Inactive.jpg": "5691da649281cae9500d6f7d5df22599",
"assets/images/icons/setupWizard/Download_Active.jpg": "b3887afab6cdc2b2290ff686ac8e5432",
"assets/images/icons/setupWizard/Download_Inactive.jpg": "0f5afb1c9eba5341e8a0b033ad56ae43",
"assets/images/icons/setupWizard/Gateway_Active.jpg": "db635d619171a266fcc252c056873540",
"assets/images/icons/setupWizard/Gateway_Inactive.jpg": "a9984bf58907bc2fe4298d281750f883",
"assets/images/icons/setupWizard/Profile_Active.jpg": "f625525a926b6c0d143f0ae33c609bd1",
"assets/images/icons/setupWizard/Profile_Inactive.jpg": "5c73b11a78858b6bf612bd4347122e1e",
"assets/images/icons/setupWizard/Select_Equipment.jpg": "3411d31f87c7e2dc0b7397753ece0063",
"assets/images/icons/smart_plug.svg": "2bb78a0426441b2c5fb2d314771940d2",
"assets/images/icons/smart_plug_outline.svg": "d1e4e240c43cb5a7baa51f13e62516b0",
"assets/images/icons/smart_relay.png": "4d56cd59918a153fe85e0d21db31b494",
"assets/images/icons/smart_relay.svg": "56c90ad1389bd25f92d9c80676e71bdb",
"assets/images/icons/switch_off.svg": "2091b4af01285bbc7e6fe7ad59c23cd9",
"assets/images/icons/switch_on.svg": "1a37414c99dbebd24e52776ce7509622",
"assets/images/icons/thermometer-partial-fill-grey.svg": "3514a2375ce068a4fa1562a15cf0c32e",
"assets/images/icons/thermostat_boosted/B.svg": "f563bc792489c8bd1c54d86575b7cf1e",
"assets/images/icons/thermostat_boosted/B1h.svg": "0130980edf843c9d992f13c48ae23cb1",
"assets/images/icons/thermostat_boosted/B2h.svg": "379d06aea388a76f448b7da5048e61c1",
"assets/images/icons/thermostat_boosted/B3h.svg": "d02299f5f0ad988e47bdd6c4f43079f1",
"assets/images/icons/thermostat_boosted/B4h.svg": "654b83338fbb678d22edd1c734968ec7",
"assets/images/icons/thermostat_boosted/B5h.svg": "73798ee7912a234f29bda502e0462ac8",
"assets/images/icons/thermostat_boosted/B6h.svg": "ec07c6d1fe18260577a99c9074d3c353",
"assets/images/icons/thermostat_boosted/B7h.svg": "f2db80aec844968b6351aaff68e8081c",
"assets/images/icons/thermostat_boosted/B8h.svg": "2f4b59459fb30f824c7d9be5dcf9c627",
"assets/images/icons/thermostat_boosted/B9h.svg": "b2fa05fe628b64dacebba4d656c9435d",
"assets/images/icons/unlink.svg": "3ae5fdd32aacaeea956fc0de5646825a",
"assets/images/icons/waterbug_grey.png": "d6a3314de6658f09585b23b0251f2566",
"assets/images/icons/waterbug_grey.svg": "ff597a67b1f87a9c13a0b10bf7da7bd8",
"assets/images/icons/waterleak_sensor.png": "2a68a3d9e3b4981a1dc83438366a83f2",
"assets/images/icons/wireless_remote_pair.svg": "bd17716083b547411ae569dc54ce1b74",
"assets/images/icons/wireless_remote_unpair.svg": "2174274e286f670e107825b46f25953e",
"assets/images/icons/wiringCenter.svg": "5fc9113b310dfcbe7a39acd384ebbc6f",
"assets/images/purmo/background.jpg": "2768b0174e17c2cf1fa659db6993bdb6",
"assets/images/purmo/background_new.jpg": "fbe3c05886053583c3846284ce6f248d",
"assets/images/purmo/header_history.svg": "018fe5712333b9e7d1b48e6762153b96",
"assets/images/purmo/header_schedule.svg": "634105c3d06138668ab2520708822e43",
"assets/images/purmo/icon_svg_logo_white.svg": "dda4ce9f230d5b59a85b1742092c6f6f",
"assets/images/purmo/lock.svg": "21100a4e8681b5c23bc82ee764f378a0",
"assets/images/purmo/logo.png": "2a1fc55159c2f4658a79d83f3631f29d",
"assets/images/purmo/logo.svg": "95e8670fb20b36863ed54dcfcacb5eb5",
"assets/images/purmo/logo_with_name.png": "2a1fc55159c2f4658a79d83f3631f29d",
"assets/images/purmo/unlock.svg": "9fd4cf47931a8eeb33b1323ac5160418",
"assets/images/PurmoLaunchIcon.png": "0e9259c87be0f29333fd339f306c5f8f",
"assets/images/purmo_prod/background.jpg": "2768b0174e17c2cf1fa659db6993bdb6",
"assets/images/purmo_prod/background_new.jpg": "fbe3c05886053583c3846284ce6f248d",
"assets/images/purmo_prod/header_history.svg": "018fe5712333b9e7d1b48e6762153b96",
"assets/images/purmo_prod/header_schedule.svg": "634105c3d06138668ab2520708822e43",
"assets/images/purmo_prod/icon_svg_logo_white.svg": "dda4ce9f230d5b59a85b1742092c6f6f",
"assets/images/purmo_prod/lock.svg": "21100a4e8681b5c23bc82ee764f378a0",
"assets/images/purmo_prod/logo.png": "2a1fc55159c2f4658a79d83f3631f29d",
"assets/images/purmo_prod/logo.svg": "95e8670fb20b36863ed54dcfcacb5eb5",
"assets/images/purmo_prod/logo_with_name.png": "2a1fc55159c2f4658a79d83f3631f29d",
"assets/images/purmo_prod/unlock.svg": "9fd4cf47931a8eeb33b1323ac5160418",
"assets/images/purmo_prod_launch_icon.png": "aaf73d3c1ddded9bfd30d53fde0828db",
"assets/images/rainbow_graident_original_size.png": "34138e8ad579b5afe0b8cf470d42e1df",
"assets/images/salus/background.jpg": "2768b0174e17c2cf1fa659db6993bdb6",
"assets/images/salus/background_new.jpg": "fbe3c05886053583c3846284ce6f248d",
"assets/images/salus/header_history.svg": "018fe5712333b9e7d1b48e6762153b96",
"assets/images/salus/header_schedule.svg": "53a386663e2197c9b0c60dad3b6cf8cf",
"assets/images/salus/icon_svg_logo_white.svg": "9d6500469e026b804d7e90f1b953b695",
"assets/images/salus/logo.png": "d3a10ff4f6c399f1d45622e09d02c0ae",
"assets/images/salus/logo.svg": "45283687f9cbd29a2526a72a029d590f",
"assets/images/salus/logo_with_name.png": "2f6e7f6eab6f2380152591b6fa0ef4ff",
"assets/images/SalusLaunchIcon.png": "44a85c47911713f5dee34e6588910e5d",
"assets/images/salus_prod_launch_icon.png": "7e4a04b5f5a0a7334cf30a830664a480",
"assets/images/usage.svg": "781be285a31a3fcb4362fb429b0a47da",
"assets/NOTICES": "8b2cf679b4ea2425875f95e4c1bf9edf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "10a3dbe2842fd3efe2d2a1a9afea401f",
"/": "10a3dbe2842fd3efe2d2a1a9afea401f",
"logo.png": "d3a10ff4f6c399f1d45622e09d02c0ae",
"main.dart.js": "32cea46625b082c07dd2f48df02aceae",
"manifest.json": "cec7bebdef30d923ccc08048b09dbf68",
"version.json": "125de492a7b9c1ed1713aa2c509eda23"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
