# 진단대상 추가

<br>

- Access Key와 Assume Role에 관련된 내용과 생성방법은 **[자주하는 질문(FAQ)](/FAQ)**를 참고해주세요

---

## Provider별 필요 권한 안내

<br>

### AWS

```
"ecr:ListImages",
"ecr:GetAuthorizationToken",
"ecr:BatchCheckLayerAvailability",
"ecr:GetDownloadUrlForLayer",
"ecr:GetRepositoryPolicy",
"ecr:DescribeRepositories",
"ecr:ListImages",
"ecr:DescribeImages",
"ecr:BatchGetImage",
"ecr:GetAuthorizationToken",
"ecs:ListClusters",
"ecs:ListContainerInstances",
"ecs:ListServices",
"ecs:ListTaskDefinitions",
"ecs:ListTasks",
"eks:DescribeCluster",
"eks:ListClusters",
"eks:ListNodegroups",
"eks:ListFargateProfiles",
"eks:AssociateAccessPolicy",
"eks:CreateAccessEntry",
"ec2:DescribeInstances",
"ec2:DescribeSnapshots"
```

### GCP

```
compute.disks.create
compute.disks.get
container.clusters.get
container.clusters.getCredentials
container.clusters.list
container.operations.get
container.operations.list
container.pods.list
iam.serviceAccounts.getAccessToken
```

### AZURE

```
Azure Kubernetes Service Cluster User Role
AcrPull
Reader
AcrImageSigner
Reader
Contributor
```

### NCP

```
NCP_INFRA_MANAGER
```

NCP의 경우, 진단 대상 클러스터에 직접 IAM Access를 추가하는 작업이 필요합니다.

<center>
    <img
        src="/assets/images/cwpp/ncp_infra_manager.png"
        width="1600"
        height="900"
        style="border: 2px solid black;"
    />
    <figcaption>IAM Access 생성</figcaption>
</center>
