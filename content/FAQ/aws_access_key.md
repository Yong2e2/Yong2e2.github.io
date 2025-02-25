---
layout: default
title: AWS
nav_order: 24
parent: 자주하는 질문(FAQ)
---

# AWS
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## AWS Access Key가 무엇인가요?

---

액세스 키는 IAM 사용자 또는 AWS 계정 루트 사용자의 장기 자격 증명입니다. <br />
액세스 키를 사용하여 (직접 또는 AWS SDK를 사용하여) AWS CLI 또는 AWS API에 대한 프로그래밍 요청에 서명할 수 있습니다. 

자세한 내용은 [aws-docs](https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/id_credentials_access-keys.html)를 참조하세요.

<br />

## AWS Access Key 생성은 어떻게 하나요?

---

aws에 접속하여 IAM 서비스로 이동합니다. <br />
왼쪽 메뉴에서 사용자를 선택하고 오른쪽 상단에 사용자 생성 버튼을 클릭합니다. <br />
사용자 이름 입력란에 관리하기 편한 임의의 사용자 이름을 입력하고 다음 버튼을 클릭합니다. <br /> 
권한 옵션에서 ‘직접 정책 연결’을 선택하고 권한 정책에서 ‘ReadOnlyAccess’ 정책을 선택한 후 다음 버튼을 클릭합니다. <br />
사용자 생성 버튼을 클릭하여 사용자 생성을 완료합니다. <br />
생성된 사용자 이름을 선택한 후 ‘액세스 키 만들기’를 클릭합니다. <br />
‘Command Line Interface(CLI)’를 선택하고 아래 확인 체크 박스를 선택한 후 다음 버튼을 클릭합니다. <br />
적절한 설명 태크 값을 입력한 뒤 액세스 키 만들기 버튼을 클릭합니다. <br />
생성된 액세스 키 .csv 파일을 다운로드 하여 생성된 액세스 키를 확인합니다. <br />

생성된 Access key와 Secret access key로 [진단대상 추가](../../진단대상 관리_진단요청/진단대상 추가/)에서 등록후 D-CLO 서비스를 이용하시면 됩니다.

<br />
**[Access Key 생성 과정]**

| Step1. AWS IAM 접속 |
|:---------------|
| <center><img src="/assets/images/aws_accessKey/aws_access_1.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step2. 사용자 생성 |
|:---------------|
| <center><img src="/assets/images/aws_accessKey/aws_access_2.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/aws_accessKey/aws_access_3.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/aws_accessKey/aws_access_4.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/aws_accessKey/aws_access_5.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step3. Access Key 생성 |
|:---------------|
| <center><img src="/assets/images/aws_accessKey/aws_access_6.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/aws_accessKey/aws_access_7.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/aws_accessKey/aws_access_8.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/aws_accessKey/aws_access_9.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/aws_accessKey/aws_access_10.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/aws_accessKey/aws_access_11.png" width="700" height="300" style="border: 1px solid black;"/></center> |

<br />

## AWS Access Key 외 다른 방법은 없나요? (Assume Role)

---

IAM 역할은 특정 권한이 있는 계정에서 생성할 수 있는 IAM 자격 증명입니다. <br />
IAM 역할은 AWS에서 자격 증명이 수행할 수 있는 작업과 수행할 수 없는 작업을 결정하는 권한 정책이 있는 AWS 자격 증명이라는 점에서 IAM 사용자와 유사합니다. <br />
그러나 한 사람과 고유하게 연관되는 대신, 역할은 필요한 모든 사람이 맡을 수 있도록 의도되어 있습니다. <br />
또한 역할에는 암호나 연결된 액세스 키와 같은 표준 장기 자격 증명이 없습니다. <br />
대신 역할을 수임할 때 역할 세션에 대한 임시 보안 자격 증명을 제공합니다.


역할을 사용하여 일반적으로 AWS 리소스에 대한 액세스 권한이 없는 사용자, 애플리케이션 또는 서비스에 대한 액세스를 위임할 수 있습니다. <br />
예를 들어 AWS 계정의 사용자에게 일반적으로 가지고 있지 않은 리소스에 대한 액세스 권한을 부여하거나 한 AWS 계정의 사용자에게 다른 계정의 리소스에 대한 액세스 권한을 부여할 수 있습니다. <br />
또는 모바일 앱에서 AWS 리소스를 사용하도록 허용하되 앱 내에 AWS 키를 포함시키지 않으려는 경우(교체가 어려울 수 있고 사용자가 AWS 키를 추출할 수 있는 곳). <br />
때로는 회사 디렉터리와 같이 AWS 외부에 이미 정의된 자격 증명이 있는 사용자에게 AWS에 액세스 권한을 부여하려는 경우가 있습니다. <br />
또는 타사에 계정에 대한 액세스 권한을 부여하여 타사가 리소스에 대한 감사를 수행할 수 있도록 할 수 있습니다.

자세한 내용은 [aws-docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)를 참조하세요.

<br />

## Assume Role 생성은 어떻게 하나요?

---

aws에 접속하여 IAM 서비스로 이동합니다. <br />
왼쪽 메뉴에서 역할을 선택하고 오른쪽 상단에 역할 만들기 버튼을 클릭합니다. <br />
신뢰할 수 있는 엔터티 유형에서 “AWS 계정”을 선택한 뒤, 하단에 “다른 AWS 계정”을 선택합니다. <br />
선택하면서 활성화 된 텍스트 박스에 D-CLO 계정 ID “176166756190“를 입력하고 다음 버튼을 클릭합니다. <br />
권한추가 단계에서 ‘ReadOnlyAccess’ 을 선택하고 다음 버튼을 클릭합니다. <br />
이름 지정, 검토 및 생성 단계에서 역할의 이름을 입력합니다. <br />
이후 전 단계에서 입력했던 D-CLO계정 ID가 정확하게 입력이 되었는지, Action 부분에 “sts:AssumeRole”가 정확하게 입력 되어있는지 확인 후 역할 생성 버튼을 클릭합니다. <br />
역할이 생성된 것을 확인한 뒤, 생성한 역할을 클릭하여 ARN 정보를 확인합니다. <br />

생성된 역할의 ARN과 역할의 이름으로 [진단 설정/진단 대상] 페이지의 [진단대상 추가](../../진단대상 관리_진단요청/진단대상 추가/)에서 등록 후 D-Clo 서비스를 이용하시면 됩니다.

<br />

**[Assume Role 생성 과정]**

| Step1. AWS IAM 접속 |
|:---------------|
| <center><img src="/assets/images/aws_assume/aws_assume_1.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step2. 역할 생성 |
|:---------------|
| <center><img src="/assets/images/aws_assume/aws_assume_2.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/aws_assume/aws_assume_3.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/aws_assume/aws_assume_4.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/aws_assume/aws_assume_5.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/aws_assume/aws_assume_6.png" width="700" height="300" style="border: 1px solid black;"/></center> |

| Step3. ARN 확인 |
|:---------------|
| <center><img src="/assets/images/aws_assume/aws_assume_7.png" width="700" height="300" style="border: 1px solid black;"/></center> |
| <center><img src="/assets/images/aws_assume/aws_assume_8.png" width="700" height="300" style="border: 1px solid black;"/></center> |