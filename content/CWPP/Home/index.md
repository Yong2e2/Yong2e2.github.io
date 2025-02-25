# 홈 화면(대시보드)

---

**D-CLO CWPP**에 처음 접속하면 다음과 같은 화면이 표시됩니다.

<center>
    <img
        src="/assets/images/cwpp/beforeDiag.png"
        width="1600"
        height="900"
        style="border: 2px solid black;"
    />
    <figcaption>진단을 한번도 하지 않은 대시보드</figcaption>
</center>
<br>
위 화면은 선택한 프로젝트와 키로 진단을 한번도 수행하지 않은 경우 표시되는 대시보드 화면입니다.
로그인 후 표시되는 대시보드에서 전체 프로젝트에 대한 진단 결과를 한 눈에 확인 할 수 있습니다.

<center>
    <img
        src="/assets/images/dashboard.png"
        width="1600"
        height="900"
        style="border: 2px solid black;"
    />
    <figcaption>대시보드 화면</figcaption>
</center>

화면 오른쪽 상단에는 로그인 된 사용자의 이름이 표시되고 왼쪽 기본 메뉴에서는 **진단설정, 진단결과, 자산 시각화, 컴플라이언스, D-CLO 설정**로 나뉘어있으며, 홈 대시보드에는 **보안 점수 총점, 컴플라이언스 보안 현황, 최근 진단 보고서, 취약점 발생 추이, 진단 후 30일 이상 경과한 키, 보안점수 60점 미만의 취약한 키, 미진단 키 리스트** 등이 표시됩니다.

<br>
대시보드에서 확인할 수 있는 기능은 다음과 같습니다.

<br>
<span style="color: blue;">1)	취약/양호별 개수 및 비율 & 보안점수 총점 & 컴플라이언스 보안 현황</span>
<center>
    <img
        src="/assets/images/dashboard_1.png"
        width="1600"
        height="900"
        style="border: 2px solid black;"
    />
    <figcaption>대시보드 화면</figcaption>
</center>

대시보드에 표시되는 화면 중 하나인 **취약/양호별 개수 및 비율, 보안점수 총점과 컴플라인스 보안 현황**입니다. **취약/양호별 개수 및 비율**에서는 **상, 중, 하 개수와 비율을 확인**할수 있으며, **보안점수 총점**에서는 **모든 프로젝트의 보안 점수를 확인**할 수 있고, **컴플라이언스 보안 현황**에서는 **컴플라이언스 별 양호/취약 비율을 그래프로 표시**하여 보여줍니다.

<br>
<span style="color: blue;">2)	최근 진단 보고서</span>
<center>
    <img
        src="/assets/images/최근 진단 보고서.png"
        width="1600"
        height="900"
        style="border: 2px solid black;"
    />
    <figcaption>최근 진단 보고서</figcaption>
</center>

최근에 진단한 결과들의 평균 보안 점수를 그래프로 표시하며 기본적으로 5개까지 표시됩니다. 양 옆의 화살표를 클릭하여 다른 결과를 확인할 수 있으며, 진단 결과에 마우스를 올렸을 때 표시되는 아이콘을 통해 **해당 진단 결과의 상세페이지로 이동하거나 해당 진단 결과보고서를 다운로드** 할 수 있습니다.

<br>
<span style="color: blue;">3)	취약점 발생 추이</span>
<center>
    <img
        src="/assets/images/취약점 발생 추이.png"
        width="1600"
        height="900"
        style="border: 2px solid black;"
    />
    <figcaption>취약점 발생 추이</figcaption>
</center>

**최근 진단한 결과들의 상, 중, 하 취약점의 추이를 한 눈에 확인**할 수 있습니다. 해당 그래프의 오른쪽 상단의 월별, 주별을 선택하여 해당하는 날짜별로 모아서 확인할 수 있습니다.

<br>
<span style="color: blue;">4)	진단 후 30일 이상 경과한 키 & 보안점수 60점 미만의 취약한 키 & 미진단 키 리스트</span>
<center>
    <img
        src="/assets/images/30일 경과 키 60점 미만 키 미진단 키.png"
        width="1600"
        height="900"
        style="border: 2px solid black;"
    />
    <figcaption>진단 후 30일 이상 경과한 키 & 보안점수 60점 미만의 취약한 키 & 미진단 키 리스트</figcaption>
</center>

프로젝트에 등록되어 관리되는 키 중에서 진단한 지 30일 이상 경과한 키, 보안점수 60점 미만의 취약한 키, 미진단 키 리스트가 출력됩니다. 잘 사용하지 않아 잊어버리고 있던 키들을 표시해주므로 관리되지 않는 오래된 키 또한 관리할 수 있으며 보안점수가 낮거나 진단하지 않는 키를 확인할 수 있습니다.
