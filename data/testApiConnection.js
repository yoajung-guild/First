// utils/testApiConnection.js
// 서버 시작 시 호출해서 실제 API 서버와 연동되는지 확인하는 모듈입니다.

const TARGET_URL = "http://painvegas53.iptime.org:8026";

async function testApiConnection() {
  console.log(`[API 연동 테스트] ${TARGET_URL} 로 요청을 보냅니다...`);

  try {
    const startTime = Date.now();

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(TARGET_URL, {
      method: "GET",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const elapsed = Date.now() - startTime;

    const html = await response.text();

    console.log("─────────────────────────────");
    console.log(`✅ 응답 수신 성공 (${elapsed}ms 소요)`);
    console.log(`상태 코드: ${response.status} ${response.statusText}`);
    console.log(`Content-Type: ${response.headers.get("content-type")}`);
    console.log(`응답 본문 길이: ${html.length}자`);
    console.log("─────────────────────────────");

    if (response.ok) {
      console.log("🟢 결과: 서버가 정상적으로 응답했습니다 (연동 확인됨).");
    } else {
      console.log(`🟡 결과: 서버는 응답했지만 상태 코드가 정상 범위(2xx)가 아닙니다. (${response.status})`);
    }
  } catch (err) {
    console.log("─────────────────────────────");
    if (err.name === "AbortError") {
      console.log("🔴 결과: 요청 시간 초과(5초). 서버가 응답하지 않습니다.");
    } else {
      console.log("🔴 결과: 요청 중 오류가 발생했습니다. 서버에 연결할 수 없습니다.");
      console.log(`오류 내용: ${err.message}`);
    }
    console.log("─────────────────────────────");
  }
}

module.exports = testApiConnection;