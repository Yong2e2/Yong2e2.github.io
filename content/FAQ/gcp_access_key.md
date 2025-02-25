---
layout: default
title: GCP
nav_order: 26
parent: 자주하는 질문(FAQ)
---

# GCP

{: .no_toc }

## Table of contents

{: .no_toc .text-delta }

1. TOC
   {:toc}

---

## GCP 진단 시 API 사용 권한이 필요한가요?

---

D-CLO에서 GCP 진단 시 API를 사용해서 진단을 하므로 일부 Google Cloud(GCP)에서 일부 API의 권한들이 필요합니다.
<br />

GCP 콘솔에서 왼쪽 GCP 기본 메뉴 중 [API 및 서비스 – 라이브러리]에 접근합니다. <br />
API 라이브러리 페이지에 접근한 뒤, 검색창에 ‘Compute Engine API’을 검색합니다. <br />
검색 결과 중 처음에 표시된 ‘Compute Engine API’을 클릭합니다. <br />
하단의 사용 버튼을 클릭하여 API를 활성화합니다. <br />

<br />
**[GCP API 사용]**

| Step1. GCP 콘솔 내 API 라이브러리 접속                                                                                       |
| :--------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/gcp_api/gcp_api_1.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step2. API 검색                                                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/gcp_api/gcp_api_2.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step3. API 선택                                                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/gcp_api/gcp_api_3.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step4. API 사용                                                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/gcp_api/gcp_api_4.png" width="700" height="300" style="border: 1px solid black;"/></center> |

<br />
D-CLO를 사용하기 위해 추가적으로 더 필요한 권한들은 아래의 표와 같습니다. <br />
표에 있는 API가 전부 정상적으로 활성화되어 있어야 D-CLO 서비스를 정상적으로 이용할 수 있습니다. <br />

<br />
**[진단 시 필요한 GCP API]**

| API Name                                 | Service Name                        |
| :--------------------------------------- | :---------------------------------- |
| Compute Engine API                       | compute.googleapis.com              |
| Cloud Key Management Service (KMS) API   | cloudkms.googleapis.com             |
| Cloud Logging API                        | logging.googleapis.com              |
| BigQuery API                             | bigquery.googleapis.com             |
| Identity and Access Management (IAM) API | iam.googleapis.com                  |
| IAM Service Account Credentials API      | iamcredentials.googleapis.com       |
| Cloud DNS API                            | dns.googleapis.com                  |
| sqladmin API (prod)                      | sqladmin.googleapis.com             |
| Stackdriver Monitoring API               | monitoring.googleapis.com           |
| Cloud Resource Manager API               | cloudresourcemanager.googleapis.com |
| Cloud Functions API                      | cloudfunctions.googleapis.com       |
| Google Cloud Memorystore for Redis API   | redis.googleapis.com                |
| Google Cloud Storage JSON API            | storage-api.googleapis.com          |
| Cloud Storage                            | storage-component.googleapis.com    |
| Cloud Storage API                        | storage.googleapis.com              |
| Service Usage API                        | serviceusage.googleapis.com         |

<br />

## GCP 키 파일은 어떻게 다운로드 받을 수 있나요?

---

D-CLO 진단 대상인 GCP에 접속하여 [IAM 및 관리자 - IAM] 메뉴로 접근합니다. <br />
IAM페이지 메뉴 중 ‘서비스 계정’을 선택한 뒤, 상단의 ‘서비스 계정 만들기’를 클릭합니다. <br />
‘서비스 계정 만들기’ 페이지로 이동되면 ‘서비스 계정 이름’, ‘서비스 계정ID’, ‘서비스 계정 설명’을 입력한 뒤, 하단의 만들고 계속하기 버튼을 클릭합니다. <br />
서비스 계정 만들기 2단계 ‘이 서비스 계정에 프로젝트에 대한 엑세스 권한 부여’ 메뉴에서 Basic뷰어 권한을 추가합니다. <br />
필터 창에 ‘보안’을 검색하여 표시되는 ‘보안 검토자’를 선택하여 권한에 추가합니다. <br />
‘뷰어’와 ‘보안 검토자’ 두 권한이 잘 부여되었는지 확인 후 하단의 완료 버튼을 클릭합니다. <br />
서비스 계정이 정상적으로 만들어 진 것을 확인 한 뒤, 생성된 서비스 계정을 클릭합니다. <br />
서비스 계정 상세화면에서 상단의 키 메뉴에 접근합니다. 그 후 하단의 ‘키 추가’ – ‘새 키 만들기’를 클릭하여 키를 생성합니다. <br />
위와 같은 화면이 표시되면 키 유형에서 JSON을 클릭한 뒤, 하단의 만들기 버튼을 클릭합니다. <br />
‘비공개 키가 컴퓨터에 저장됨’이라는 메시지와 함께 json 파일이 다운로드 됩니다. <br />

[진단대상 추가](../../진단대상 관리\_진단요청/진단대상 추가/) 메뉴에서 프로바이더를 GCP로 선택한 뒤 파일 업로드를 클릭하여 해당 파일을 업로드 후 이어서 진행해주시면 됩니다.

<br />

**[GCP Key 생성 과정]**

| Step1. GCP 콘솔 내 IAM 접속                                                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/gcp_accessKey/gcp_accessKey_1.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step2. 서비스 계정 생성                                                                                                                  |
| :--------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/gcp_accessKey/gcp_accessKey_2.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/gcp_accessKey/gcp_accessKey_3.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/gcp_accessKey/gcp_accessKey_4.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/gcp_accessKey/gcp_accessKey_5.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/gcp_accessKey/gcp_accessKey_6.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/gcp_accessKey/gcp_accessKey_7.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step3. Key 생성                                                                                                                           |
| :---------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/gcp_accessKey/gcp_accessKey_8.png" width="700" height="300" style="border: 1px solid black;"/></center>  |
| <center><img src="/assets/images/gcp_accessKey/gcp_accessKey_9.png" width="700" height="300" style="border: 1px solid black;"/></center>  |
| <center><img src="/assets/images/gcp_accessKey/gcp_accessKey_10.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/gcp_accessKey/gcp_accessKey_11.png" width="700" height="300" style="border: 1px solid black;"/></center> |
