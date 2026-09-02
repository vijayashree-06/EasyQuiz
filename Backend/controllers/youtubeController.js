const { YoutubeTranscript } = require("youtube-transcript")

const getTranscript = async (req, res) => {
  try {
    const { url } = req.body

    if (!url) {
      return res.status(400).json({
        success: false,
        message: "YouTube URL is required",
      })
    }

    // Get transcript
    const transcript = await YoutubeTranscript.fetchTranscript(url)

    const text = transcript
      .map((item) => item.text)
      .join(" ")

    // Get YouTube video title
    let title = "YouTube Video"

    try {
      const response = await fetch(
        `https://www.youtube.com/oembed?url=${encodeURIComponent(
          url
        )}&format=json`
      )

      if (response.ok) {
        const data = await response.json()
        title = data.title || "YouTube Video"
      }
    } catch (titleError) {
      console.log("Could not fetch YouTube title")
    }

    res.json({
      success: true,
      message: "Transcript extracted successfully",
      title,
      transcript: text,
      segments: transcript.length,
    })
  } catch (error) {
    console.error("Transcript error:", error.message)

    res.status(500).json({
      success: false,
      message:
        "Could not extract transcript. Make sure the video has captions.",
    })
  }
}

module.exports = {
  getTranscript,
}