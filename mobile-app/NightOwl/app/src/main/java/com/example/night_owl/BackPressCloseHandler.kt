import android.app.Activity
import android.widget.Toast

class BackPressCloseHandler(private val activity: Activity) {
	private var backKeyPressedTime: Long = 0
	private var guideToast: Toast? = null
	fun onBackPressed() {
		if (System.currentTimeMillis() > backKeyPressedTime + 2000) {
			backKeyPressedTime = System.currentTimeMillis()
			showGuide()
			return
		}
		if (System.currentTimeMillis() <= backKeyPressedTime + 2000) {
			activity.finish()
			toast.cancel()
		}
	}

	fun showGuide() {
		guideToast = Toast.makeText(
			activity,
			"뒤로 가기를 한번 더 누르면 종료됩니다.", Toast.LENGTH_SHORT
		)
		toast.show()
	}
}