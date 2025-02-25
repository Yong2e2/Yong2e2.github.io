---
layout: default
title: NCP
nav_order: 25
parent: 자주하는 질문(FAQ)
---

# NCP

{: .no_toc }

## Table of contents

{: .no_toc .text-delta }

1. TOC
   {:toc}

---

## NCP Access Key가 무엇인가요?

---

Access Key는 D-CLO가 NCP(Naver Cloud Platform)서비스에 접근하여 취약점을 진단하기 위한 필요한 Key입니다. <br />
해당 키를 발급받아 D-CLO 키 추가에 추가 해주셔야 D-CLO 취약점 진단을 정상적으로 이용할 수 있습니다. <br />
현재 사용중인 Access Key와 Secret Key가 있는 경우 해당 키를 입력하셔도 무방하지만 D-CLO에서는 진단에만 사용할 Sub Account를 생성한 뒤, Access Key와 Secret Key를 발급받아 사용하시길 권장합니다. <br />
NCP(Naver Cloud Platform) Access Key와 Secret Key를 한번도 발급받거나 사용한 적이 없는 경우, 하단의 Access Key 생성 매뉴얼을 따라 진행하시면 Access Key와 Secret Key를 쉽게 발급 받을 수 있습니다. <br />

※ API authentication key·API 인증키(Access key)

네이버 클라우드 플랫폼에서 제공 중인 서비스의 다양한 기능을 제어할 수 있는 API를 보안을 위해 권한을 가진 사용자만 호출할 수 있도록 Access key와 Secret key 한 쌍으로 구성하여 회원별로 발급하는 사용자 식별 도구
<br />

자세한 내용은 [Naver Cloud Platform](https://www.ncloud.com/)를 참조하세요.

<br />

## NCP Access Key 생성은 어떻게 하나요?

---

NCP(Naver Cloud Platform) 서비스에 로그인 한 뒤, NCP 대시보드 > Services > Management & Governance > SubAccount를 클릭하여 해당 메뉴에 접근합니다. <br />
Sub Account 서비스 메뉴 중 가운데 하단의 서브 계정을 클릭하며, Sub Accounts 메뉴로 이동합니다. <br />
Sub Accounts 메뉴에서 왼쪽 상단에 ‘서브 계정 생성’을 클릭합니다. <br />
로그인 아이디와 사용자 이름을 입력합니다. 그 후 아래에 있는 Console 접근과 API 접근을 체크한 뒤 생성을 클릭합니다. <br />
서브 계정 생성 확인 팝업이 표시되며, 하단의 확인 버튼을 클릭합니다. <br />
서브 계정이 정상적으로 생성이 되었다면, 하단의 정책 탭에 ‘모든 권한 추가’ 버튼을 클릭합니다. <br />
모든 권한 추가 팝업이 표시되면 ‘NCP_ADMINISTRATOR’를 체크한 뒤, 하단의 추가 버튼을 클릭합니다. <br />
권한이 추가된 것을 확인 한 뒤, 하단의 Access Key 메뉴를 클릭합니다. <br />
Access Key 생성 팝업이 표시되면, ‘추가’ 버튼을 클릭하여 Access Key와 Secret Key를 생성합니다. <br />
Access Key가 생성된 것을 확인한 뒤, Secret Key 하단의 ‘보기’ 버튼을 클릭하면 Secret Key를 확인할 수 있습니다.<br />

생성된 Access Key ID와 방금 확인한 Secret Key를 복사하여 [키 추가](경로 확인)에 등록하면 D-CLO NCP 취약점 진단을 이용할 수 있습니다.

<br />
**[Access Key 생성 과정]**

| Step1. NCP 콘솔 접속                                                                                                                  |
| :------------------------------------------------------------------------------------------------------------------------------------ |
| <center><img src="/assets/images/ncp_accessKey/ncp_access_1.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step2. Sub Accounts 생성                                                                                                              |
| :------------------------------------------------------------------------------------------------------------------------------------ |
| <center><img src="/assets/images/ncp_accessKey/ncp_access_2.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/ncp_accessKey/ncp_access_3.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/ncp_accessKey/ncp_access_4.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/ncp_accessKey/ncp_access_5.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/ncp_accessKey/ncp_access_6.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step3. 권한 추가                                                                                                                      |
| :------------------------------------------------------------------------------------------------------------------------------------ |
| <center><img src="/assets/images/ncp_accessKey/ncp_access_7.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/ncp_accessKey/ncp_access_8.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/ncp_accessKey/ncp_access_9.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step4. Access Key 생성                                                                                                                 |
| :------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/ncp_accessKey/ncp_access_10.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/ncp_accessKey/ncp_access_11.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/ncp_accessKey/ncp_access_12.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/ncp_accessKey/ncp_access_13.png" width="700" height="300" style="border: 1px solid black;"/></center> |

<br />

## ADMINISTRATOR, INFRA_MANAGER 권한이 모두 필요한가요?

---

만약 두 권한이 부담스러운 경우 NCP_SUB_ACCOUNT_MANAGER 권한을 부여하여 D-CLO 사용이 가능합니다.

D-CLO에서 NCP를 정상적으로 진단하기 필요한 권한과 각 권한의 설명은 아래 표와 같습니다.

| 권한명                  | 권한 설명                                                                                                                      |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| NCP_ADMINISTRATOR       | 네이버 클라우드 플랫폼 내 포털, 콘솔 접근에 있어서 메인 계정과 동일하게 접근할 수 있는 권한                                    |
| NCP_SUB_ACCOUNT_MANAGER | Sub Account 서비스 내 모든 기능을 이용할 수 있는 권한                                                                          |
| NCP_INFRA_MANAGER       | 네이버 클라우드 플랫폼 내 모든 상품을 이용할 수 있으나 포털 내 마이페이지 일부 기능(이용 관리, 결제 관리) 접근이 제한되는 권한 |

**※ 3개의 권한이 모두 필요한 것이 아닌, 위 권한 중 최소한 하나의 권한이 필요합니다.**

위 권한 중 SUB*ACCOUNT_MANAGER의 권한으로 D-CLO를 이용할 시 D-CLO에서 정확한 진단을 위해서 진단 요청 시 아래 표의 권한들을 부여한 뒤, 진단이 종료된 후 처음 부여된 SUB_ACCOUNT* MANAGER의 권한을 제외한 권한들을 다시 삭제합니다.
SUB_ACCOUNT_MANAGER를 부여된 계정이 D-CLO를 이용하여 진단될 경우 부여되고 삭제되는 권한들은 아래의 표에서 확인할 수 있습니다.

| 권한 ID                              | 권한 명                                     |
| :----------------------------------- | :------------------------------------------ |
| 6db379e0-be3b-11ed-b277-246e96592200 | NCP_ARC_EYE_VIEWER                          |
| 41db01d0-add3-11ed-a3ac-246e96591a38 | NCP_VIDEO_PLAYER_ENHANCEMENT_VIEWER         |
| 6b46e870-81bb-11ed-a1f3-246e9659184c | NCP_VPC_DATA_CATALOG_VIEWER                 |
| 50f77fb0-7c62-11ed-bdd6-246e96591594 | NCP_VPC_CLOUD_SECURITY_WATCHER_VIEWER       |
| 9e4f1c10-7c61-11ed-a1f3-246e9659184c | NCP_VPC_SECRET_MANAGER_VIEWER               |
| 9e4e0aa0-7c61-11ed-a3ac-246e96591a38 | NCP_CLOVA_GREENEYE_VIEWER                   |
| 482fe2f0-6a4c-11ed-8b9d-246e9659184c | NCP_GLOBAL_TRAFFIC_MANAGER_VIEWER           |
| 482d71f0-6a4c-11ed-bb6c-246e96592200 | NCP_VPC_SSL_VPN_VIEWER                      |
| 4dae9e60-3fea-11ed-8925-246e96592200 | NCP_DATA_BOX_FRAME_VIEWER                   |
| 8d76bad0-29a3-11ed-9304-246e96591a38 | NCP_IOT_VIDEO_STREAM_VIEWER                 |
| b0727d70-21d4-11ed-8925-246e96592200 | NCP_VPC_IPSEC_VPN_VIEWER                    |
| 32549a80-21c6-11ed-80c0-246e96591594 | NCP_VPC_CLOUD_CONNECT_VIEWER                |
| 1fa69c00-13be-11ed-8925-246e96592200 | NCP_DATA_FOREST_VIEWER                      |
| 08705730-08e0-11ed-9304-246e96591a38 | NCP_SINGLE_SIGN_ON_VIEWER                   |
| 56bb8720-c169-11ec-8925-246e96592200 | NCP_ARCHIVE_STORAGE_VIEWER                  |
| 56b45b30-c169-11ec-8925-246e96592200 | NCP_NCLOUD_CHAT_VIEWER                      |
| 2cf04340-c15f-11ec-a436-246e9659184c | NCP_IOT_DEVICE_HUB_VIEWER                   |
| 19605870-8fe5-11ec-885e-246e9659184c | NCP_VPC_CLOUD_DB_FOR_POSTGRESQL_VIEWER      |
| 7a843440-6246-11ec-8cc0-246e96591594 | NCP_API_WORKFLOW_VIEWER                     |
| 7a7ae570-6246-11ec-8cc0-246e96591594 | NCP_MEDIA_CONNECT_CENTER_VIEWER             |
| 7a63db00-6246-11ec-8cc0-246e96591594 | NCP_CLOVA_STUDIO_VIEWER                     |
| 7a5a3e10-6246-11ec-8cc0-246e96591594 | NCP_VPC_SIMPLE_RABBITMQ_SERVICE_VIEWER      |
| 7a513d60-6246-11ec-8cc0-246e96591594 | NCP_AITEMS_VIEWER                           |
| 35925ff0-4dd9-11ec-81ec-246e9659184c | NCP_CLOVA_FACESIGN_VIEWER                   |
| 5f978740-3573-11ec-8e86-246e96592200 | NCP_CLOUD_DATA_BOX_VIEWER                   |
| f2dc0280-16d6-11ec-9c82-246e96591a38 | NCP_VOD_STATION_VIEWER                      |
| 0106ad70-16d6-11ec-bc7d-246e9659184c | NCP_RPA_SERVICE_VIEWER                      |
| 00fbd800-16d6-11ec-bc7d-246e9659184c | NCP_OBJECT_MIGRATION_VIEWER                 |
| 564bc5b0-eec0-11eb-bf22-246e96591594 | NCP_VPC_NETWORK_TRAFFIC_MONITORING_VIEWER   |
| 562ccc00-eec0-11eb-bf22-246e96591594 | NCP_VPC_CLOUD_FUNCTIONS_VIEWER              |
| dc6ba0b0-bed3-11eb-b68e-246e96591a38 | NCP_SUB_ACCOUNT_VIEWER                      |
| 23446300-98e1-11eb-b893-246e9659184c | NCP_GLOBAL_DNS_VIEWER                       |
| 8a1ef240-9858-11eb-b893-246e9659184c | NCP_VPC_BLOCKCHAIN_SERVICE_VIEWER           |
| 8a1ad390-9858-11eb-b893-246e9659184c | NCP_VPC_CLOUD_DB_FOR_MONGODB_VIEWER         |
| f12ecab0-7ce6-11eb-8456-246e96591a38 | NCP_GAME_CHAT_VIEWER                        |
| f12aac00-7ce6-11eb-8456-246e96591a38 | NCP_GAME_REPORT_VIEWER                      |
| f1268d50-7ce6-11eb-8456-246e96591a38 | NCP_CLOVA_AI_CALL_VIEWER                    |
| f11d3e80-7ce6-11eb-8456-246e96591a38 | NCP_VIDEO_PLAYER_VIEWER                     |
| f1188390-7ce6-11eb-8456-246e96591a38 | NCP_VPC_WEBSHELL_BEHAVIOR_DETECTOR_VIEWER   |
| f10fd100-7ce6-11eb-8456-246e96591a38 | NCP_NAS_VIEWER                              |
| f10b1610-7ce6-11eb-8456-246e96591a38 | NCP_VPC_NAS_VIEWER                          |
| a31e7ff0-66de-11eb-8f16-246e96592200 | NCP_SOURCEBUILD_VIEWER                      |
| a319c500-66de-11eb-8f16-246e96592200 | NCP_SOURCECOMMIT_VIEWER                     |
| a315cd60-66de-11eb-8f16-246e96592200 | NCP_SOURCEPIPELINE_VIEWER                   |
| a3116090-66de-11eb-8f16-246e96592200 | NCP_SOURCEDEPLOY_VIEWER                     |
| a30d68f0-66de-11eb-8f16-246e96592200 | NCP_VPC_SOURCEPIPELINE_VIEWER               |
| a3094a40-66de-11eb-8f16-246e96592200 | NCP_VPC_SOURCEDEPLOY_VIEWER                 |
| a30579b0-66de-11eb-8f16-246e96592200 | NCP_CLOUD_INSIGHT_VIEWER                    |
| a2ff5f30-66de-11eb-8f16-246e96592200 | NCP_VPC_LOAD_BALANCER_VIEWER                |
| 548ba920-5bd6-11eb-8f3e-246e96591a38 | NCP_CLOVA_SPEECH_VIEWER                     |
| 54823340-5bd6-11eb-8f3e-246e96591a38 | NCP_APP_SAFER_VIEWER                        |
| 5475b020-5bd6-11eb-8f3e-246e96591a38 | NCP_VPC_CLOUD_DB_FOR_MSSQL_VIEWER           |
| abbf9550-2989-11eb-b7bd-246e96592200 | NCP_VPC_CLOUD_HADOOP_VIEWER                 |
| abb6e2c0-2989-11eb-b7bd-246e96592200 | NCP_ELSA_VIEWER                             |
| abb24ee0-2989-11eb-b7bd-246e96592200 | NCP_SECURITY_MONITORING_VIEWER              |
| abaca990-2989-11eb-b7bd-246e96592200 | NCP_VPC_SECURITY_MONITORING_VIEWER          |
| c0c4b0a0-145a-11eb-9bab-246e96591a38 | NCP_CLOUD_ACTIVITY_TRACER_VIEWER            |
| c0c15540-145a-11eb-9bab-246e96591a38 | NCP_RESOURCE_MANAGER_VIEWER                 |
| c0ba5060-145a-11eb-9bab-246e96591a38 | NCP_CLOUD_OUTBOUND_MAILER_VIEWER            |
| c0842530-145a-11eb-9bab-246e96591a38 | NCP_WEB_SECURITY_CHECKER_VIEWER             |
| a1378990-f8d7-11ea-93ae-246e9659184c | NCP_LIVE_STATION_VIEWER                     |
| a1342e30-f8d7-11ea-93ae-246e9659184c | NCP_VPC_CLOUD_ADVISOR_VIEWER                |
| a12a1c10-f8d7-11ea-93ae-246e9659184c | NCP_VPC_KUBERNETES_SERVICE_VIEWER           |
| a123b370-f8d7-11ea-93ae-246e9659184c | NCP_VPC_CLOUD_DATA_STREAMING_SERVICE_VIEWER |
| a11d23c0-f8d7-11ea-93ae-246e9659184c | NCP_VPC_AUTOSCALING_VIEWER                  |
| a119c860-f8d7-11ea-93ae-246e9659184c | NCP_FILE_SAFER_VIEWER                       |
| b0ebc780-c74e-11ea-815a-246e963c7c28 | NCP_CLOUD_LOG_ANALYTICS_VIEWER              |
| b0e84510-c74e-11ea-815a-246e963c7c28 | NCP_SYSTEM_SECURITY_CHECKER_VIEWER          |
| b0e49b90-c74e-11ea-815a-246e963c7c28 | NCP_VPC_VIEWER                              |
| b0e07ce0-c74e-11ea-815a-246e963c7c28 | NCP_OBJECT_STORAGE_VIEWER                   |
| b0dcd360-c74e-11ea-815a-246e963c7c28 | NCP_PRIVATE_CA_VIEWER                       |
| b0d950f0-c74e-11ea-815a-246e963c7c28 | NCP_VPC_SEARCH_ENGINE_SERVICE_VIEWER        |
| b0d1afd0-c74e-11ea-815a-246e963c7c28 | NCP_PINPOINT_CLOUD_VIEWER                   |
| b0ca83e0-c74e-11ea-815a-246e963c7c28 | NCP_VPC_CLOUD_DB_FOR_REDIS_VIEWER           |
| b0c21f70-c74e-11ea-815a-246e963c7c28 | NCP_VOD_STATION_OLD_VIEWER                  |
| c641b660-afb8-11ea-8d87-246e963c7ebc | NCP_CERTIFICATE_MANAGER_VIEWER              |
| 820d05a0-9b4d-11ea-8d87-246e963c7ebc | NCP_VPC_CLOUD_DB_FOR_MYSQL_VIEWER           |
| 820145d0-9b4d-11ea-8d87-246e963c7ebc | NCP_VPC_SERVER_VIEWER                       |
| 81f9f2d0-9b4d-11ea-8d87-246e963c7ebc | NCP_OCR_VIEWER                              |
| 81f64950-9b4d-11ea-8d87-246e963c7ebc | NCP_CHATBOT_VIEWER                          |
| 07faaf50-82bd-11e9-912b-246e963c7c28 | NCP_CLOUD_SEARCH_VIEWER                     |
| 725df1b0-40ad-11e9-9b72-246e963c8000 | NCP_GAMEPOT_VIEWER                          |
| 725a4830-40ad-11e9-9b72-246e963c8000 | NCP_IMAGE_OPTIMIZER_VIEWER                  |
| 724e1330-40ad-11e9-9b72-246e963c8000 | NCP_API_GATEWAY_VIEWER                      |
| 6b7eda80-f922-11e8-8743-246e963a4064 | NCP_WMS_VIEWER                              |
| 473ade70-d2a4-11e8-8054-246e963c7c28 | NCP_CONTAINER_REGISTRY_VIEWER               |
| 732ac470-b19b-11e8-a205-246e963a4064 | NCP_MONITORING_VIEWER                       |
| b617bae0-49ef-11e8-9f3b-000000007c28 | NCP_SECURE_ZONE_FIREWALL_VIEWER             |
| e2017530-3340-11e8-a694-000000004064 | NCP_NETWORK_TRAFFIC_MONITORING_VIEWER       |
| f9a5eeb0-fc3f-11e7-8e00-000000008000 | NCP_AUTOSCALING_MANAGER                     |
| cf457fa0-dacd-11e9-9905-246e963c7ebc | NCP_LOAD_BALANCER_MANAGER                   |
| cf53b070-dacd-11e9-a5d4-246e963c8000 | NCP_CLOUD_DB_FOR_MYSQL_MANAGER              |
| cf5732e0-dacd-11e9-a5d4-246e963c8000 | NCP_CLOUD_DB_FOR_REDIS_MANAGER              |
| cf5b78a0-dacd-11e9-a5d4-246e963c8000 | NCP_CLOUD_DB_FOR_MSSQL_MANAGER              |
| f9ba12f0-fc3f-11e7-8e00-000000008000 | NCP_CDN_PLUS_MANAGER                        |
| cf499e50-dacd-11e9-a5d4-246e963c8000 | NCP_GLOBAL_CDN_MANAGER                      |
