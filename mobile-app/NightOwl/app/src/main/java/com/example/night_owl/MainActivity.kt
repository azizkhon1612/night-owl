package com.example.night_owl

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val webView=findViewById<WebView>(R.id.webView)

        webView.apply {
            webViewClient= WebViewClient()
            webChromeClient= WebChromeClient()
            loadUrl("https://night-owl-ten.vercel.app/")
            onBackPressed()
        }

        webView.settings.apply {
            javaScriptEnabled=true
            domStorageEnabled=true
            setSupportMultipleWindows(true)
            setSupportZoom(true)
        }

    }
    override fun onBackPressed() {
        if (webView.canGoBack())
            webView.goBack()
        else
            super.onBackPressed()
    }

}