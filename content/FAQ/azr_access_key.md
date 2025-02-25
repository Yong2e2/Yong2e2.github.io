---
layout: default
title: AZURE
nav_order: 27
parent: 자주하는 질문(FAQ)
---

# AZURE

{: .no_toc }

## Table of contents

{: .no_toc .text-delta }

1. TOC
   {:toc}

---

## AZURE Key 생성은 어떻게 하나요?

---

D-CLO를 사용하여 Microsoft Azure진단을 사용하기 위해선 키 추가에서 프로바이더를 Microsoft로 선택하여 키 등록을 진행하여야 합니다.

키 추가 단계에서 필요한 키 값들은 다음과 같습니다.
<br />

| Azure 진단 시 필요한 키                                                                                                                  |
| :--------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_accessKey/azr_accessKey_1.png" width="700" height="300" style="border: 1px solid black;"/></center> |

<br />
Azure 진단 시 필요한 애플리케이션 ID (클라이언트) / 디렉터리 ID(테넌트)를 확인하기 위해 앱 등록 하는 방법은 아래와 같습니다.

Azure Portal에서 Microsoft Entra ID(Azure Active Directory)에 접근합니다. <br />
Microsoft Entra ID(Azure Active Directory) 페이지에서 왼쪽 메뉴 중 앱 등록 페이지에 접근합니다. <br />
앱 등록 페이지에서 상단의 ‘새 등록’ 버튼을 클릭하여 새로운 앱을 생성합니다. <br />
애플리케이션 등록 페이지로 이동하게 되면, 등록할 앱의 이름을 입력하고, 지원되는 계정 유형을 ‘이 조직 디렉터리의 계정만’을 선택하고 하단의 등록 버튼을 클릭합니다. <br />
앱이 정상적으로 생성된 경우, 위의 화면이 표시되며 위 화면에서 애플리케이션 ID, 디렉터리 ID를 확인합니다. <br />

※ Microsoft는 Azure AD(Azure Active Directory)의 이름을 Microsoft Entra ID로 변경했습니다.
자세한 내용은 [Microsoft-Learn](https://learn.microsoft.com/ko-kr/entra/fundamentals/new-name)를 참조하세요.

<br />

| 애플리케이션 ID (클라이언트) / 디렉터리 ID(테넌트)                                                                                              |
| :---------------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_1.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step1. 앱 등록                                                                                                                                  |
| :---------------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_2.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_3.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_4.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_5.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step2. 애플리케이션 ID (클라이언트) / 디렉터리 ID(테넌트) 확인                                                                                  |
| :---------------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_6.png" width="700" height="300" style="border: 1px solid black;"/></center> |

<br />
Azure 진단 시 필요한 클라이언트 비밀키를 생성하는 방법은 아래와 같습니다.

생성된 앱에서 왼쪽 메뉴 중 ‘인증서 및 암호’ 페이지로 이동합니다. 이동 후 ‘새 클라이언트 암호’를 클릭하여 새로운 암호 키를 생성합니다. <br />
클라이언트 암호 추가 창이 표시되면 설명에 키의 이름을 입력하고 하단의 추가버튼을 클릭합니다. <br />
생성된 키의 값 부분에 표시되는 값은 Azure 키 추가에서 필요한 키 값입니다. <br />

<br />

| 클라이언트 비밀키 값                                                                                                                            |
| :---------------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_7.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step1. 클라이언트 암호 추가                                                                                                                      |
| :----------------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_8.png" width="700" height="300" style="border: 1px solid black;"/></center>  |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_9.png" width="700" height="300" style="border: 1px solid black;"/></center>  |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_10.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step2. 클라이언트 비밀키 값 확인                                                                                                                 |
| :----------------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_11.png" width="700" height="300" style="border: 1px solid black;"/></center> |

<br />
Azure 진단 시 필요한 구독 ID를 확인 하기 전 해당 구독에 권한 부여가 필요합니다. <br />
<br />

**[권한 부여]**

Azure에서 진단을 진행할 때 필요한 권한들을 추가해주어야 합니다. <br />
왼쪽 메뉴에서 API 사용 권한에 접근하여 ‘권한 추가’를 클릭합니다. <br />
API 사용 권한 요청 창이 표시되면 Microsoft Graph를 클릭합니다. <br />
‘애플리케이션 사용 권한’을 클릭한 뒤, 권한 선택 검색창에 ‘Policy.read’를 검색한 뒤, ‘Policy-Policy.read.All’을 선택하고 하단의 권한 추가 버튼을 클릭합니다. <br />
권한이 정상적으로 부여된 것을 확인한 뒤, 권한 추가하는 것을 반복하여 위 사진과 같이 총 5개의 권한을 추가합니다. <br />
권한이 모두 부여된 것을 확인한 뒤, 사진에 표시된 관리자 동의 허용을 클릭합니다. <br />
동의 허용 팝업이 표시되면, 하단의 예를 클릭하여 권한을 적용합니다. <br />

| Step1. API 사용 권한 추가                                                                                                                        |
| :----------------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_12.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_13.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_14.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_15.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step2. 관리자 동의 허용                                                                                                                          |
| :----------------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_16.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_17.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_18.png" width="700" height="300" style="border: 1px solid black;"/></center> |

<br />
※ 아래와 같이 관리자 동의 허용이 비활성화 되어 있을 경우, 해당 권한이 없으므로 관리자에게 허용 요청을 해야합니다.

| 관리자 동의 허용 비활성화                                                                                                                        |
| :----------------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_19.png" width="700" height="300" style="border: 1px solid black;"/></center> |

<br />
Azure 진단 시 필요한 구독 ID를 확인 하기 전 해당 구독에 역할 할당이 필요합니다.
<br />

<br />

- CSPM 진단 시 필요한 권한

| API/권한 이름                     | 유형         | 설명                                   |
| --------------------------------- | ------------ | -------------------------------------- |
| AuditLog.Read.All                 | 애플리케이션 | Read all audit log data                |
| Directory.Read.All                | 애플리케이션 | Read directory data                    |
| Policy.Read.All                   | 애플리케이션 | Read your organization's policies      |
| User.Read                         | 위임됨       | Sign in and read user profile          |
| User.Read.All                     | 위임됨       | Read all users' full profiles          |
| User.Read.All                     | 애플리케이션 | Read all users' full profiles          |
| UserAuthenticationMethod.Read.All | 애플리케이션 | Read all users' authentication methods |

<br />

**[역할 할당]**

D-CLO Azure 진단에 사용할 구독 서비스를 클릭하여 이동합니다. <br />
왼쪽 메뉴에서 엑세스 제어(IAM)을 선택하여 엑세스 제어 페이지로 이동합니다. <br />
추가 버튼을 클릭한 뒤 표시되는 드롭다운 메뉴에서 ‘역할 할당 추가’를 클릭합니다. <br />
역할 할당 추가 페이지로 이동되며, 역할 탭에서 ‘독자’ 권한을 선택합니다. <br />
구성원 탭을 선택하여, 중간에 표시된 ‘구성원 선택’을 클릭합니다. <br />
구성원 선택 창이 표시되며, 위에서 생성한 앱 이름을 입력하고 표시된 아이콘을 클릭합니다. 그 후 하단에 있는 선택 버튼을 클릭합니다. <br />
선택된 구성원이 위에서 생성된 앱의 이름인지 확인 한 뒤, 하단의 ‘검토+할당’을 선택합니다. <br />

| Step1. 구독 접근                                                                                                                                 |
| :----------------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_20.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_21.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step2. 역할 할당                                                                                                                                 |
| :----------------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_22.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_23.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_24.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_25.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_26.png" width="700" height="300" style="border: 1px solid black;"/></center> |

<br />
구독 권한 부여 후 Azure 진단 시 필요한 구독 ID 확인하는 방법은 아래와 같습니다. <br />

D-CLO Azure 진단에 사용할 구독 서비스를 클릭하여 이동합니다. <br />
구독 상세 페이지에서 표시된 구독 ID 값을 확인 합니다. <br />

| 구독 ID 확인                                                                                                                                     |
| :----------------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_27.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step1. 개요 페이지에서 구독 ID 확인                                                                                                              |
| :----------------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_create_accessKey/azr_create_aK_28.png" width="700" height="300" style="border: 1px solid black;"/></center> |

<br />

위에서 진행하면서 확인된 키를 순서대로 입력해주시면 됩니다.

1. 앱 등록 - 애플리케이션 ID (클라이언트)
2. 앱 등록 - 디렉터리 ID(테넌트)
3. 인증서 및 암호 – 클라이언트 비밀키 값
4. 구독 – 구독 ID

<br />

## Azure 키 확인은 어떻게 하나요?

---

키 추가 단계에서 필요한 키 값들은 다음과 같습니다.
<br />

| Azure 진단 시 필요한 키                                                                                                                  |
| :--------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_accessKey/azr_accessKey_1.png" width="700" height="300" style="border: 1px solid black;"/></center> |

<br />
각각의 키를 확인하는 메뉴의 위치는 다음과 같습니다. <br />

✅ ‘CLIENT_ID’와 ‘TENANT_ID’는 다음 위치에서 확인할 수 있습니다. <br />
Azure Portal에서 Microsoft Entra ID(Azure Active Directory)에 접근합니다. <br />
Microsoft Entra ID(Azure Active Directory) 페이지에서 왼쪽 메뉴 중 앱 등록 페이지에 접근합니다. <br />
등록된 D-CLO 진단에 등록하여 사용할 앱을 클릭합니다. <br />
표시된 각각의 애플리케이션 ID (클라이언트) -> CLIENT_ID, 디렉터리 ID(테넌트) -> TENANT_ID값을 확인한 뒤 입력해주시면 됩니다. <br />

| Step1. Microsoft Entra ID(Azure Active Directory) 접근                                                                                   |
| :--------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_accessKey/azr_accessKey_2.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step2. 등록한 앱에서 ‘CLIENT_ID’와 ‘TENANT_ID’ 확인                                                                                      |
| :--------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_accessKey/azr_accessKey_3.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_accessKey/azr_accessKey_4.png" width="700" height="300" style="border: 1px solid black;"/></center> |

✅ ‘CLIENT_SECRET’ 키 값을 확인하는 방법은 다음과 같습니다.
왼쪽 메뉴에서 ‘인증서 및 암호’를 클릭하여 페이지를 이동합니다.
위 사진에 표시된 하단에 표시되는 값 -> ‘CLIENT_SECRET’ 키 값입니다.

※ 해당 키 값의 경우 생성한 직후가 아니면 모든 값을 확인할 수 없으므로, 저장해둔 키 값이 없다면 ‘새로운 클라이언트 암호’를 클릭하여 새로운 키를 생성하여 입력해야 합니다.
※ 또한, 해당 앱에 최소한 다음과 같은 권한들이 포함되어 있어야 합니다.

| Step1. ‘CLIENT_SECRET’ 키 값 확인                                                                                                        |
| :--------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_accessKey/azr_accessKey_5.png" width="700" height="300" style="border: 1px solid black;"/></center> |

✅ ‘SUBSCRIPTION_ID’ 키 값을 확인하는 위치는 다음과 같습니다.
Azure 서비스 상단의 검색창에 ‘구독’을 검색한 뒤, 서비스 결과에 표시되는 ‘구독’ 서비스를 클릭하여 해당 페이지에 접근합니다.
구독 서비스 페이지에 접근한 뒤, 위 사진에 표시한 부분의 구독 ID를 확인하여 키 추가 시 입력해주시면 됩니다.

※ D-CLO 진단에 사용하려는 앱 서비스에 최소한 독자(read) 권한이 부여되어 있어야 합니다.

| Step1. 구독 접근                                                                                                                         |
| :--------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_accessKey/azr_accessKey_6.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/azr_accessKey/azr_accessKey_7.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step2. ‘SUBSCRIPTION_ID’ 키 값 확인                                                                                                      |
| :--------------------------------------------------------------------------------------------------------------------------------------- |
| <center><img src="/assets/images/azr_accessKey/azr_accessKey_8.png" width="700" height="300" style="border: 1px solid black;"/></center> |
