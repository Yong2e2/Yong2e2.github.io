---
layout: default
title: KT
nav_order: 28
parent: 자주하는 질문(FAQ)
---

# KT

## KT API key 생성은 어떻게 하나요?

### **Platform G1,G2**

D-CLO에서 KT 클라우드 진단 시 API를 사용해서 진단을 하므로 KT 클라우드의 API Key가 필요합니다. <br />

KT 클라우드 콘솔에서 왼쪽 기본 메뉴 중 [API Key – API Key]에 접근합니다. <br />
Default API Key의 `API Key`와 `Secret Key`를 사용 합니다. <br />
'마스킹 해제' 버튼을 눌러 마스킹을 해제한 키값들을 D-CLO에 등록 합니다. <br />
또는 [API Key – Storage]탭에서 'API Key 추가' 버튼으로 추가로 생성된 키를 사용 합니다.<br />

<br />

**[Platform G1,G2 API 사용]**

| Step1. KT 클라우드 콘솔 내 API Key탭 접속                                                                                  |
| :------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/kt_api/kt_api_1.png" width="200" height="300" style="border: 1px solid black;"/></center> |

| Step2. 마스킹 해제 후, Default API Key 사용                                                                                |
| :------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/kt_api/kt_api_2.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step3. Storage탭 선택                                                                                                      |
| :------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/kt_api/kt_api_3.png" width="200" height="300" style="border: 1px solid black;"/></center> |

| Step4. API Key 추가                                                                                                        |
| :------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/kt_api/kt_api_4.png" width="700" height="300" style="border: 1px solid black;"/></center> |

<br />

### **Platform D**

KT 클라우드 콘솔에서 왼쪽 기본 메뉴 중 [Severs – Token]에 접근합니다. <br />
Token의 `Project Id`와 `Project Name`, `Password`를 사용 합니다. <br />
'Project ID 확인' 버튼을 눌러 `Project Id`를 확인하고 D-CLO에 등록 합니다. <br />

<br />

**[Platform D API 사용]**

| Step1. KT 클라우드 콘솔 내 Token탭 접속                                                                                      |
| :--------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/kt_api/kt_api_d_1.png" width="200" height="300" style="border: 1px solid black;"/></center> |

| Step2. Project ID 확인                                                                                                       |
| :--------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/kt_api/kt_api_d_2.png" width="700" height="300" style="border: 1px solid black;"/></center> |

<br />

## KT 진단 시 API 사용 권한이 필요한가요?

KT 클라우드의 API 키는 루트의 모든 권한을 포함하고 있습니다. <br />
따라서 D-CLO 서비스를 이용하기 위해서 별도의 권한 설정이 필요치 않습니다. <br />

<!-- D-CLO를 사용하기 위해 추가적으로 더 필요한 권한들은 아래의 표와 같습니다. <br />
표에 있는 API가 전부 정상적으로 활성화되어 있어야 D-CLO 서비스를 정상적으로 이용할 수 있습니다. <br />

**[진단 시 필요한 KT API]**

| API Name | Service Name |
|:---------------|:---------------|
| Compute Engine API | compute.googleapis.com |
| 클라우드 Key Management Service (KMS) API | 클라우드kms.googleapis.com | -->

<br />

## Root 계정의 API Key 발급 / Token 외 다른 방법은 없나요?

현재(2025-02-24)로써는 다른 방법이 존재하지 않습니다.

<br />

## IAM 유저는 API Key 생성이 불가능한가요?

현재(2025-02-24) KT 클라우드에서는 IAM 계정으로 API 키 발급이 불가 합니다. (API 제공 계획 없음)
